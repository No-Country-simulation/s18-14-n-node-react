import { z } from 'zod'

export const createProfileSchema = z.object({
  description: z.string(),
  image: z.custom<File>(
    (file) => {
      if (!(file instanceof File)) return false
      const validTypes = ['image/jpeg', 'image/png', 'image/gif']
      const maxSize = 5 * 1024 * 1024
      if (!validTypes.includes(file.type)) return false
      if (file.size > maxSize) return false
      return true
    },
    {
      message: 'File not valid. It must be an image and smaller than 5MB',
    },
  ),
})

export const updateProfileSchema = z.object({
  description: z.string().optional(),
  image: z
    .custom<File>(
      (file) => {
        if (!(file instanceof File)) return false
        const validTypes = ['image/jpeg', 'image/png', 'image/gif']
        const maxSize = 5 * 1024 * 1024
        if (!validTypes.includes(file.type)) return false
        if (file.size > maxSize) return false
        return true
      },
      {
        message: 'File not valid. It must be an image and smaller than 5MB',
      },
    )
    .optional(),
})
