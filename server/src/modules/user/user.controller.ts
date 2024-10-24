import { Controller } from '../../types'
import { UserService } from './users.service'

export class UserController {
  static getUsers: Controller = (_req, res, next) => {
    const data = UserService.getUsers()
    data
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        next(error)
      })
  }

  static assignRole: Controller = (req, res, next) => {
    const data = UserService.assignRole(req.params.id, req.body.role)
    data
      .then(() => {
        res.status(200).json({ message: 'Role successfully assigned!' })
      })
      .catch((error) => {
        next(error)
      })
  }
}
