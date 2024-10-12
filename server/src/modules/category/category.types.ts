import { z } from 'zod'
import { createCategorySchema, readCategoriesSchema, updateCategorySchema } from './category.dto'

export type CreateCategory = z.infer<typeof createCategorySchema>
export type ReadCategories = z.infer<typeof readCategoriesSchema>
export type UpdateCategory = z.infer<typeof updateCategorySchema>
