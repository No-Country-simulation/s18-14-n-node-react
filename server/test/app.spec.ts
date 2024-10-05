import { Server } from 'node:http'
import { Express } from 'express'
import TestAgent from 'supertest/lib/agent'
import Test from 'supertest/lib/test'
import request from 'supertest'
import App from '../src/app'

describe('Testing App', () => {
  let app: Express
  let server: Server
  let api: TestAgent<Test>

  beforeAll(() => {
    app = new App().start()
    server = app.listen(9000)
    api = request(app)
  })

  describe('GET /', () => {
    it(`Should get "Hello World!" message`, async () => {
      const { statusCode, body } = await api.get('/api/v1')
      expect(statusCode).toBe(200)
      expect(body.message).toEqual('Hello World!')
    })
  })

  afterAll(() => {
    server.close()
  })
})
