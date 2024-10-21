import { ZodError } from 'zod'
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'
import { RouteErr } from './errors/RouteErr'
import { ErrHandler, RNFHandler } from './types'
import HttpErr from './errors/HttpErr'

export default class AppHandlers {
  static get handlers() {
    const routeNotFound: RNFHandler = (_req, res) => {
      res.status(404).json({ message: 'Route not found. Check URL 👀' })
    }

    const error: ErrHandler = (error, _req, res, _next) => {
      if (error instanceof RouteErr) {
        const { status, message } = error
        return res.status(status).json({ message })
      }

      if (error instanceof ZodError)
        return res.status(400).json(
          error.issues.map((issue) => ({
            validation: issue.path,
            message: issue.message,
          })),
        )
      else if (error instanceof JsonWebTokenError) return res.status(401).json(error)
      else if (error instanceof TokenExpiredError) return res.status(403).json(error)
      else if (error instanceof HttpErr)
        return res.status(error.status).json({
          message: error.msg,
          description: error.description,
        })
    }

    return { error, routeNotFound }
  }
}
