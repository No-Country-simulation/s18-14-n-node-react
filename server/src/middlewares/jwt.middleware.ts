import * as jwt from 'jsonwebtoken'
import { Middleware } from '../types'
import { envs } from '../config'
import { IPayload } from '../user'
import HttpErr from '../errors/HttpErr'

const jwtAuthentication: Middleware = (req, _res, next) => {
  try {
    const secret = envs.nodeEnv === 'prod' ? (envs.jwtAccessSecret as string) : 'secret'

    const [type, token] = req.headers.authorization?.split(' ') ?? []

    if (type === 'Bearer' && token) {
      const payload = jwt.verify(token, secret)
      req.user = payload as IPayload
      return next()
    } else {
      throw new HttpErr(401, 'Unathorized', 'Jwt not found!')
    }
  } catch (error) {
    next(error)
  }
}

export default jwtAuthentication
