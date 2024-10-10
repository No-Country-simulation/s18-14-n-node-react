import { AuthService } from './auth.service'
import { Controller } from '../../types'

export class AuthController {
  static login: Controller = (req, res, next) => {
    const data = AuthService.login(req.body)
    data
      .then(({ accessToken }) => {
        res.status(200).json({ accessToken })
      })
      .catch((error) => {
        next(error)
      })
  }

  static register: Controller = (req, res, next) => {
    const data = AuthService.register(req.body)
    data
      .then(({ msg }) => {
        res.status(200).json({ message: msg })
      })
      .catch((error) => {
        next(error)
      })
  }
}
