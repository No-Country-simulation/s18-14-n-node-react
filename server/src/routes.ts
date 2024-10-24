import { Router } from 'express'
import welcomeRoute from './modules/welcome/welcome.route'
import authRoute from './modules/auth/auth.route'
import userRoute from './modules/user/user.route'
import profileRoute from './modules/profile/profile.route'
import categoryRouter from './modules/category/category.router'
import ingredientRouter from './modules/ingredient/ingredient.router'

export default class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/', welcomeRoute)
    router.use('/auth', authRoute)
    router.use('/user', userRoute)
    router.use('/profile', profileRoute)
    router.use('/category', categoryRouter)
    router.use('/ingredient', ingredientRouter)

    return router
  }
}
