import { z } from 'zod'

export const createCategorySchema = z
  .object({
    name: z.string(),
    description: z.string(),
  })
  .strict()

export type CreateCategory = z.infer<typeof createCategorySchema>
