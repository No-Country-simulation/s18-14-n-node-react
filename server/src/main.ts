import App from './app'

async function main() {
  const port = process.env.PORT || 3000
  const app = new App().start()

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`)
  })
}

void main()
