import { Request, Response, NextFunction } from 'express'
import { AuthService } from './auth.service'

export class AuthController {
  static login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = AuthService.login(req.body)
      res.status(200).json({ data })
    } catch (error) {
      next(error)
    }
  }

  static register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = AuthService.register(req.body)
      res.status(200).json({ data })
    } catch (error) {
      next(error)
    }
  }
}
