import { z } from 'zod'
import {
  createIngredientSchema,
  readIngredientsSchema,
  updateIngredientSchema,
} from './ingredient.dto'

export type CreateIngredient = z.infer<typeof createIngredientSchema>
export type ReadIngredients = z.infer<typeof readIngredientsSchema>
export type UpdateIngredient = z.infer<typeof updateIngredientSchema>
