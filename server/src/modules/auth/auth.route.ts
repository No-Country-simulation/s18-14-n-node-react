import { Router } from 'express'
import schemaValidator from '../../middlewares/validator.middleware'
import { AuthController } from './auth.controller'
import { loginSchema, registerSchema } from './auth.dto'

const router = Router()

router.post('/login', schemaValidator(loginSchema, null), AuthController.login)
router.post('/register', schemaValidator(registerSchema, null), AuthController.register)

export default router
