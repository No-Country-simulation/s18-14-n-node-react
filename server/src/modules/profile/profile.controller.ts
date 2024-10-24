import HttpErr from '../../errors/HttpErr'
import { Controller } from '../../types'
import { ProfileService } from './profile.service'

export class ProfileController {
  static getProfile: Controller = (req, res, next) => {
    const id = req.user?.id

    if (!id) throw new HttpErr(400, 'Bad Request', 'User not found!')

    const data = ProfileService.getProfile(id)
    data
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((error) => {
        next(error)
      })
  }

  static updateProfile: Controller = (req, res, next) => {
    const id = req.user?.id
    const image = req.file

    if (!id) throw new HttpErr(400, 'Bad Request', 'User not found!')

    const data = ProfileService.updateProfile(id, req.body, image)
    data
      .then(() => {
        res.status(200).json({ message: 'Profile successfully updated!' })
      })
      .catch((error) => {
        next(error)
      })
  }
}
