import { WelcomeService } from './welcome.service'
import { Controller } from '../../types'

export class WelcomeController {
  static welcome: Controller = (_req, res, next) => {
    try {
      const welcome = WelcomeService.welcome()
      res.status(200).json(welcome)
    } catch (error) {
      next(error)
    }
  }
}
