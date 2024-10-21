import { Router } from 'express'
import jwtAuthentication from '../../middlewares/jwt.middleware'
import { ProfileController } from './profile.controller'
import { uploadImage } from '../../middlewares/upload-file.middleware'
import schemaValidator from '../../middlewares/validator.middleware'
import { updateProfileSchema } from './profile.dto'

const router = Router()

router.get('/', jwtAuthentication, ProfileController.getProfile)
router.put(
  '/',
  uploadImage.single('image'),
  schemaValidator(updateProfileSchema, null),
  jwtAuthentication,
  ProfileController.updateProfile,
)

export default router
