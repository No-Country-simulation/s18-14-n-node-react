import { Router } from 'express'
import authRoute from './modules/auth/auth.route'

export default class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/auth', authRoute)

    return router
  }
}
