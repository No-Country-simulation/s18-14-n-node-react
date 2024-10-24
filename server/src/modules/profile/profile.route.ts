import { Router } from 'express'
import jwtAuthentication from '../../middlewares/jwt.middleware'
import schemaValidator from '../../middlewares/validator.middleware'
import { ProfileController } from './profile.controller'
import { uploadImage } from '../../middlewares/upload-file.middleware'
import { updateProfileSchema } from './profile.dto'

const router = Router()

router.get('/', jwtAuthentication, ProfileController.getProfile)
router.put(
  '/',
  jwtAuthentication,
  uploadImage.single('image'),
  schemaValidator(updateProfileSchema, null),
  ProfileController.updateProfile,
)

export default router
