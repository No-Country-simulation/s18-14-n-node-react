import { Router } from 'express'
import { CategoryController } from './category.controller'
import { verifyDto } from '../../middlewares/verifyDto.middleware'
import { createCategorySchema } from './category.dto'

const categoryRouter = Router()

categoryRouter.post(
  '/create-category',
  verifyDto({ body: createCategorySchema }),
  CategoryController.createCategory,
)

export default categoryRouter
