export class RouteErr extends Error {
  message: string
  status: number
  constructor() {
    super()
    this.name = 'RouteErr'
    this.message = 'Route not found. Check URL'
    this.status = 404
  }
}
