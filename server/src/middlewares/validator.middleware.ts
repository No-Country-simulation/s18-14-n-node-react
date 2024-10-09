import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError, ZodTypeAny } from 'zod'

const schemaValidator = (schema: AnyZodObject | null, paramsSchema: ZodTypeAny | null) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schema) schema.parse(req.body)

      if (paramsSchema) paramsSchema.parse(req.params.id)
      return next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json(
          error.issues.map((issue) => ({
            path: issue.path[0],
            message: issue.message,
          })),
        )
      }
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

export default schemaValidator
