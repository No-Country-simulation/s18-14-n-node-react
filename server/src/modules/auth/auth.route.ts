import { Router } from 'express'
import schemaValidator from '../../middlewares/validator.middleware'
import { AuthController } from './auth.controller'
import { changePasswordSchema, loginSchema, registerSchema } from './auth.dto'
import jwtAuthentication from '../../middlewares/jwt.middleware'

const router = Router()

router.post('/login', schemaValidator(loginSchema, null), AuthController.login)
router.post('/register', schemaValidator(registerSchema, null), AuthController.register)
router.put(
  '/change-password',
  jwtAuthentication,
  schemaValidator(changePasswordSchema, null),
  AuthController.changePassword,
)

export default router
