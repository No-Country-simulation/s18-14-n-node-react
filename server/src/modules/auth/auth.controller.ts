import { AuthService } from './auth.service'
import { Controller } from '../../types'
import HttpErr from '../../errors/HttpErr'

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
      .then(() => {
        res.status(200).json({ message: 'New user registered' })
      })
      .catch((error) => {
        next(error)
      })
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
}
