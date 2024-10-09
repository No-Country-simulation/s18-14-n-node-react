import express from 'express'
import cors from 'cors'
import AppRoutes from './routes'

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

    return this.app
  }
}
