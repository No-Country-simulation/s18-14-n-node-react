import { z } from 'zod'
import { categoryNameSchema } from '../../zod-schemas/categoryName.schema'
import { urlSchema } from '../../zod-schemas/url.schema'

export const createCategorySchema = z
  .object({
    name: categoryNameSchema,
    description: z.string(),
    img: urlSchema,
  })
  .strict()

export const readCategoriesSchema = z
  .object({
    name: categoryNameSchema,
  })
  .partial()
  .strict()

export const updateCategorySchema = createCategorySchema
  .partial()
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'The object cannot be empty',
  })
