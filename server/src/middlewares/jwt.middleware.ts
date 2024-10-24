import * as jwt from 'jsonwebtoken'
import { Middleware } from '../types'
import { IPayload } from '../user'
import HttpErr from '../errors/HttpErr'

const jwtAuthentication: Middleware = (req, _res, next) => {
  try {
    const secret =
      process.env.NODE_ENV === 'prod' ? (process.env.JWT_ACCESS_SECRET as string) : 'access_secret'

    const [type, token] = req.headers.authorization?.split(' ') ?? []

    if (type === 'Bearer' && token) {
      const payload = jwt.verify(token, secret)
      req.user = payload as IPayload
      return next()
    } else {
      throw new HttpErr(401, 'Unathorized', 'No access granted!')
    }
  } catch (error) {
    next(error)
  }
}

export default jwtAuthentication
