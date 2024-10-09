import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().trim().email('It should be a valid email'),
  username: z.string().trim().min(6, 'Min length: 6').max(20, 'Max length: 20'),
  password: z.string().trim().min(6, 'Min length: 6').max(30, 'Max length: 30'),
})

export const loginSchema = z.object({
  email: z.string().email('It should be a valid email').optional(),
  username: z.string().optional(),
  password: z.string(),
})
