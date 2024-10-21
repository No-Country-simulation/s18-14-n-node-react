import { z } from 'zod'
import { createIngredientSchema } from './ingredient.dto'

export type CreateIngredient = z.infer<typeof createIngredientSchema>
