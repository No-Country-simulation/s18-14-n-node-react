import { Router } from 'express'
import authRoute from './modules/auth/auth.route'
import welcomeRoute from './modules/welcome/welcome.route'
import categoryRouter from './modules/category/category.router'

export default class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/', welcomeRoute)
    router.use('/auth', authRoute)
    router.use('/category', categoryRouter)

    return router
  }
}
