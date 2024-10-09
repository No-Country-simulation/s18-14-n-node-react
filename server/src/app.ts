import express from 'express'
import cors from 'cors'
import AppRoutes from './routes'
import AppHandlers from './handlers'

export default class App {
  public readonly app = express()

  start(): express.Express {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))

    const allowedOrigin = ['http://localhost:5173']

    this.app.use(
      cors({
        origin: (origin, callback) => {
          if (!origin || allowedOrigin.includes(origin)) {
            callback(null, true)
          } else {
            callback(new Error('Not allowed by CORS'))
          }
        },
        methods: 'GET,POST,PUT,DELETE,PATCH',
        preflightContinue: true,
        optionsSuccessStatus: 204,
        credentials: true,
        allowedHeaders: [
          'Content-Type',
          'Authorization',
          'Content-Disposition',
          'Access-Control-Allow-Origin',
          'Access-Control-Allow-Credentials',
        ],
      }),
    )

    this.app.use('/api/v1', AppRoutes.routes)
    this.app.use(AppHandlers.handlers.routeNotFound)
    this.app.use(AppHandlers.handlers.error)

    return this.app
  }
}
