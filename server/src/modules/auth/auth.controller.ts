import { CookieOptions, Response } from 'express'
import { AuthService } from './auth.service'
import { Controller } from '../../types'
import HttpErr from '../../errors/HttpErr'
import { envs } from '../../config'

export class AuthController {
  private static setCookie(name: string, res: Response, token: string) {
    const options: CookieOptions = {
      httpOnly: true,
      secure: envs.nodeEnv === 'prod',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 2,
    }
    res.cookie(name, token, options)
  }

  private static removeCookie(name: string, res: Response) {
    const options: CookieOptions = {
      httpOnly: true,
      secure: envs.nodeEnv === 'prod',
      sameSite: 'strict',
    }
    res.clearCookie(name, options)
  }

  static login: Controller = (req, res, next) => {
    const cookieName = envs.nodeEnv === 'prod' ? (envs.cookieName as string) : 'recetapp'
    const data = AuthService.login(req.body)
    data
      .then(({ accessToken, refreshToken }) => {
        res.status(200).json({ accessToken })
        res
        this.setCookie(cookieName, res, refreshToken)
      })
      .catch((error) => {
        next(error)
      })
  }

  static register: Controller = (req, res, next) => {
    const data = AuthService.register(req.body)
    data
      .then(() => {
        res.status(200).json({ message: 'New user registered' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static logout: Controller = (req, res, next) => {
    const cookieName = envs.nodeEnv === 'prod' ? (envs.cookieName as string) : 'recetapp'
    const cookie = req.headers.cookie
    if (!cookie) throw new HttpErr(400, 'Bad Request', 'Cookie not found!')
    try {
      this.removeCookie(cookieName, res)
      res.status(200).json({ message: 'Logout successfully!' })
    } catch (error) {
      next(error)
    }
  }

  static changePassword: Controller = (req, res, next) => {
    const id = req.user?.id

    if (!id) throw new HttpErr(400, 'Bad Request', 'User id not found!')

    const data = AuthService.changePassword(id, req.body)
    data
      .then(() => {
        res.status(200).json({ message: 'Password succesfully changed!' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static forgotPassword: Controller = (req, res, next) => {
    const data = AuthService.forgotPassword(req.body['email'])
    data
      .then(() => {
        res.status(200).json({ message: 'Email with link send!' })
      })
      .catch((error) => {
        next(error)
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  static recoveryPassword: Controller = (req, res, next) => {}
}
