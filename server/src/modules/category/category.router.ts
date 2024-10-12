import { Router } from 'express'
import { CategoryController } from './category.controller'
import { verifyDto } from '../../middlewares/verifyDto.middleware'
import { createCategorySchema, readCategoriesSchema, updateCategorySchema } from './category.dto'
import { paramsWithIdSchema } from '../../zod-schemas/paramsWithId.schema'

const categoryRouter = Router()

categoryRouter.post(
  '/create-category',
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
  verifyDto({ params: paramsWithIdSchema, body: updateCategorySchema }),
  CategoryController.updateCategory,
)

categoryRouter.delete(
  '/delete-category/:id',
  verifyDto({ params: paramsWithIdSchema }),
  CategoryController.deleteCategory,
)

export default categoryRouter
