import { RouteErr } from './errors/RouteErr'
import { ErrHandler, RNFHandler } from './types'
import { ZodError } from 'zod'

export default class AppHandlers {
  static get handlers() {
    const routeNotFound: RNFHandler = (_req, res) => {
      res.status(404).json({ msg: 'Route not found. Check URL 👀' })
    }

    const error: ErrHandler = (error, _req, res, _next) => {
      if (error instanceof RouteErr) {
        const { status, msg } = error
        return res.status(status).json({ msg })
      }

      if (error instanceof ZodError) {
        return res.status(400).json(error)
      }

      return res.status(500).json(error)
    }

    return { error, routeNotFound }
  }
}
