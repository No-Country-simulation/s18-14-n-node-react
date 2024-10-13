import { PrismaClient } from '@prisma/client'
import App from './app'

async function main() {
  const prisma = new PrismaClient()

  await prisma.$connect()

  const port = process.env.PORT || 3000
  const app = new App().start()

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`)
  })

  await prisma.$disconnect()
}

void main()
