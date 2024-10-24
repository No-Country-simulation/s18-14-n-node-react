import { Roles } from '@prisma/client'
import { z } from 'zod'

export const assignRoleSchema = z
  .object({
    role: z.enum([Roles.ADMIN, Roles.CHIEF, Roles.CLIENT]),
  })
  .strict()
