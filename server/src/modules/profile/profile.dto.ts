import { z } from 'zod'

const MAX_UPLOAD_SIZE = 3 * 1024 * 1024
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif']

export const updateProfileSchema = z
  .object({
    description: z.string().optional(),
    image: z
      .instanceof(File)
      .refine((file) => {
        return !file || file.size <= MAX_UPLOAD_SIZE
      }, 'File must be less than 3MB')
      .refine((file) => {
        return !file || ACCEPTED_FILE_TYPES.includes(file.type)
      }, 'File must be a JPEG, PNG, GIF')
      .optional(),
  })
  .strict()
