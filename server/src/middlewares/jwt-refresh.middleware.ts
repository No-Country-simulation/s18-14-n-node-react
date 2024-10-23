import * as jwt from 'jsonwebtoken'
import { Middleware } from '../types'
import { connDb } from '../db/connDb'
import HttpErr from '../errors/HttpErr'
import { IPayload } from '../user'

const jwtRefreshAuthentication: Middleware = async (req, res, next) => {
  const cookieName =
    process.env.NODE_ENV === 'prod' ? (process.env.COOKIE_NAME as string) : 'recetapp'

  const accessSecret =
    process.env.NODE_ENV === 'prod' ? (process.env.JWT_ACCESS_SECRET as string) : 'access_secret'
  const refreshSecret =
    process.env.NODE_ENV === 'prod' ? (process.env.JWT_REFRESH_SECRET as string) : 'refresh_secret'

  try {
    const cookie = req.headers.cookie

    if (!cookie) throw new HttpErr(400, 'Bad request', 'Not logged in!')

    const refreshToken = cookie.split('=')[1].split(';')[0]
    res.clearCookie(cookieName, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'prod',
      sameSite: true,
    })

    const userFound = await connDb.user.findFirst({
      where: { refreshToken: { has: refreshToken } },
    })

    // REUSE ATTEMPT
    if (!userFound) {
      jwt.verify(refreshToken, refreshSecret, async (err: any, decoded: any) => {
        if (err) throw new HttpErr(403, 'Forbidden', 'Error on decoding')
        await connDb.user.update({
          where: { id: decoded.id },
          data: {
            refreshToken: [],
          },
        })
      })
      throw new HttpErr(403, 'Forbidden', 'Token reuse attempt detected!')
    }

    const newRefreshTokenArray = userFound.refreshToken.filter((rt) => rt !== refreshToken)

    jwt.verify(refreshToken, refreshSecret, async (err: any, decoded: any) => {
      if (err) {
        userFound.refreshToken = [...newRefreshTokenArray]
        await connDb.user.update({
          where: { id: userFound.id },
          data: {
            refreshToken: userFound.refreshToken,
          },
        })
      }

      // IF USER IDS DON'T MATCH
      if (err || userFound.id !== decoded.id) {
        await connDb.user.update({
          where: { id: decoded.id },
          data: {
            refreshToken: [],
          },
        })
        throw new HttpErr(403, 'Forbidden', 'The ids do not match')
      }

      const payload: IPayload = {
        id: decoded.id,
        role: decoded.role,
      }

      const accessToken = jwt.sign(payload, accessSecret, { expiresIn: '15m' })
      const newRefreshToken = jwt.sign(payload, refreshSecret, { expiresIn: '2h' })

      userFound.refreshToken = [...newRefreshTokenArray, newRefreshToken]

      await connDb.user.update({
        where: { id: userFound.id },
        data: {
          refreshToken: userFound.refreshToken,
        },
      })

      res.cookie(cookieName, newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'prod',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 2,
      })

      res.status(200).json({ accessToken: accessToken })
    })
  } catch (error) {
    next(error)
  }
}

export default jwtRefreshAuthentication
