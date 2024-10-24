import { Router } from 'express'
import { CategoryController } from './category.controller'
import { verifyDto } from '../../middlewares/verifyDto.middleware'
import { createCategorySchema, readCategoriesSchema, updateCategorySchema } from './category.dto'
import { paramsWithIdSchema } from '../../zod-schemas/paramsWithId.schema'
import jwtAuthentication from '../../middlewares/jwt.middleware'
import roleAuthentication from '../../middlewares/roles.middleware'
import { Roles } from '@prisma/client'

const categoryRouter = Router()

categoryRouter.post(
  '/create-category',
  jwtAuthentication,
  roleAuthentication(Roles.ADMIN),
  verifyDto({ body: createCategorySchema }),
  CategoryController.createCategory,
)

categoryRouter.get(
  '/read-categories',
  verifyDto({ query: readCategoriesSchema }),
  CategoryController.readCategories,
)

categoryRouter.patch(
  '/update-category/:id',
  jwtAuthentication,
  roleAuthentication([Roles.ADMIN, Roles.CHIEF]),
  verifyDto({ params: paramsWithIdSchema, body: updateCategorySchema }),
  CategoryController.updateCategory,
)

categoryRouter.delete(
  '/delete-category/:id',
  jwtAuthentication,
  roleAuthentication([Roles.ADMIN, Roles.CHIEF]),
  verifyDto({ params: paramsWithIdSchema }),
  CategoryController.deleteCategory,
)

export default categoryRouter
