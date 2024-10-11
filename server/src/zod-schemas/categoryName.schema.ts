import { z } from 'zod'
import { REGEX } from '../regex/regex'

export const categoryNameSchema = z
  .string()
  .min(1, { message: 'Min 1 digit' })
  .max(50, { message: 'Max 50 digit.' })
  .refine((name) => !REGEX.startWithSpace.test(name), {
    message: 'Do not start with spaces.',
  })
  .refine((name) => !REGEX.endWithSpace.test(name), {
    message: 'Do not finalize with spaces.',
  })
  .refine((name) => !REGEX.specialCharacters.test(name), {
    message: 'Without special characters.',
  })
  .refine((name) => !REGEX.numbers.test(name), {
    message: 'No numbers.',
  })
  .transform((name) => name.toLowerCase())
