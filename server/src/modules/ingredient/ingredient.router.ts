import { Router } from 'express'
import { verifyDto } from '../../middlewares/verifyDto.middleware'
import { createIngredientSchema, readIngredientsSchema } from './ingredient.dto'
import { IngredientController } from './ingredient.controller'

const ingredientRouter = Router()

ingredientRouter.post(
  '/create-ingredient',
  verifyDto({ body: createIngredientSchema }),
  IngredientController.createIngredient,
)

ingredientRouter.get(
  '/read-ingredients',
  verifyDto({ query: readIngredientsSchema }),
  IngredientController.readIngredients,
)

export default ingredientRouter
