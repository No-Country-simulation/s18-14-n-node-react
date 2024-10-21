import { z } from 'zod'
import { urlSchema } from '../../zod-schemas/url.schema'
import { ingredientNameSchema } from '../../zod-schemas/ingredientName.schema'

export const createIngredientSchema = z
  .object({
    name: ingredientNameSchema,
    description: z.string(),
    img: urlSchema,
  })
  .strict()
