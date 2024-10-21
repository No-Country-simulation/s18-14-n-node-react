import { Router } from 'express'
import jwtAuthentication from '../../middlewares/jwt.middleware'
import { ProfileController } from './profile.controller'

const router = Router()

router.get('/', jwtAuthentication, ProfileController.getProfile)
router.put('/', jwtAuthentication, ProfileController.updateProfile)

export default router
