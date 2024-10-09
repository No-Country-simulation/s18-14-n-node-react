import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodTypeAny } from 'zod'

const schemaValidator = (schema: AnyZodObject | null, paramsSchema: ZodTypeAny | null) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (schema) schema.parse(req.body)

      if (paramsSchema) paramsSchema.parse(req.params.id)
      return next()
    } catch (error) {
      next(error)
    }
  }
}

export default schemaValidator
