import * as jwt from 'jsonwebtoken'
import { Middleware } from '../types'
import { envs } from '../config'
import { IPayload } from '../user'
import HttpErr from '../errors/HttpErr'

const jwtRecoveryAuthentication: Middleware = (req, _res, next) => {
  try {
    const secret = envs.nodeEnv === 'prod' ? (envs.jwtRecoverySecret as string) : 'secret'

    const { token, expiresIn } = req.query

    if (token && Date.now() < parseInt(expiresIn as string)) {
      const payload = jwt.verify(token as string, secret)
      req.user = payload as IPayload
      return next()
    } else {
      throw new HttpErr(401, 'Unathorized', 'Jwt not found or link expired!')
    }
  } catch (error) {
    next(error)
  }
}

export default jwtRecoveryAuthentication
