import { Router } from 'express'
import schemaValidator from '../../middlewares/validator.middleware'
import { AuthController } from './auth.controller'
import {
  changePasswordSchema,
  forgotPassword,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from './auth.dto'
import jwtAuthentication from '../../middlewares/jwt.middleware'
import jwtRefreshAuthentication from '../../middlewares/jwt-refresh.middleware'

const router = Router()

// GET ROUTES
router.get('/reset-password/:token')
router.get('/refresh', jwtRefreshAuthentication)
router.get('/logout', AuthController.logout)

// POST ROUTES
router.post('/login', schemaValidator(loginSchema, null), AuthController.login)
router.post('/register', schemaValidator(registerSchema, null), AuthController.register)
router.post(
  '/forgot-password',
  schemaValidator(forgotPassword, null),
  AuthController.forgotPassword,
)

// PUT ROUTES
router.put(
  '/reset-password/:token',
  schemaValidator(resetPasswordSchema, null),
  AuthController.recoveryPassword,
)
router.put(
  '/change-password',
  jwtAuthentication,
  schemaValidator(changePasswordSchema, null),
  AuthController.changePassword,
)

// DELETE ROUTES
router.delete('/delete-account', jwtAuthentication, AuthController.deleteAccount)

export default router
