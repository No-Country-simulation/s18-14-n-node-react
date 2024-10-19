import { Controller } from '../../types'
import { ProfileService } from './profile.service'

export class ProfileController {
  static getProfile: Controller = (req, res, next) => {
    const id = req.user?.id as string
    const data = ProfileService.getProfile(id)

    data
      .then((data) => {
        res.status(200).json(data)
      })
      .then((error) => {
        next(error)
      })
  }

  static createProfile: Controller = (req, res, next) => {
    const userId = req.user?.id as string
    const image = req.file
    const data = ProfileService.createProfile(userId, req.body, image)
    data
      .then(() => {
        res.status(201).json({ message: 'Profile successfully created' })
      })
      .catch((error) => {
        next(error)
      })
  }

  static updateProfile: Controller = (req, res, next) => {
    const id = req.user?.id as string
    const image = req.file
    const data = ProfileService.updateProfile(id, req.body, image)

    data
      .then(() => {
        res.status(200).json({ message: 'Profile successfully updated!' })
      })
      .then((error) => {
        next(error)
      })
  }
}
