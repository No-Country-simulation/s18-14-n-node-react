import { Router } from 'express'
import { CategoryController } from './category.controller'
import { verifyDto } from '../../middlewares/verifyDto.middleware'
import { createCategorySchema, readCategoriesSchema } from './category.dto'

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

export default categoryRouter
