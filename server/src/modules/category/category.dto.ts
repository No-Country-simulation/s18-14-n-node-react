import { z } from 'zod'
import { categoryNameSchema } from '../../zod-schemas/categoryName.schema'

export const createCategorySchema = z
  .object({
    name: z.string(),
    description: z.string(),
  })
  .strict()

export type CreateCategory = z.infer<typeof createCategorySchema>

export const readCategoriesSchema = z
  .object({
    name: categoryNameSchema,
  })
  .partial()
  .strict()

export type ReadCategories = z.infer<typeof readCategoriesSchema>
