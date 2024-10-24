import { z } from 'zod'
import { createIngredientSchema, readIngredientsSchema } from './ingredient.dto'

export type CreateIngredient = z.infer<typeof createIngredientSchema>
export type ReadIngredients = z.infer<typeof readIngredientsSchema>
