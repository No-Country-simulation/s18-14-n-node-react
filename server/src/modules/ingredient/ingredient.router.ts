import { Router } from 'express'
import { verifyDto } from '../../middlewares/verifyDto.middleware'
import { createIngredientSchema } from './ingredient.dto'
import { IngredientController } from './ingredient.controller'

const ingredientRouter = Router()

ingredientRouter.post(
  '/create-ingredient',
  verifyDto({ body: createIngredientSchema }),
  IngredientController.createIngredient,
)

export default ingredientRouter
