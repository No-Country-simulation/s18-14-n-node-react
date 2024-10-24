import { Router } from 'express'
import jwtAuthentication from '../../middlewares/jwt.middleware'
import roleAuthentication from '../../middlewares/roles.middleware'
import { Roles } from '@prisma/client'
import { UserController } from './user.controller'
import schemaValidator from '../../middlewares/validator.middleware'
import { assignRoleSchema } from './user.dto'

const router = Router()

router.get('/', jwtAuthentication, roleAuthentication(Roles.ADMIN), UserController.getUsers)
router.put(
  '/assign-role/:id',
  jwtAuthentication,
  roleAuthentication(Roles.ADMIN),
  schemaValidator(assignRoleSchema, null),
  UserController.assignRole,
)

export default router
