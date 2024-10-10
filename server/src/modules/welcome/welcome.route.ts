import { Router } from 'express'
import { WelcomeController } from './welcome.controller'

const welcomeRoute = Router()

welcomeRoute.get('', WelcomeController.welcome)

export default welcomeRoute
