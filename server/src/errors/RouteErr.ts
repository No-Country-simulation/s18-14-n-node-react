export class RouteErr extends Error {
  msg: string
  status: number
  constructor() {
    super()
    this.name = 'RouteErr'
    this.msg = 'Route not found. Check URL'
    this.status = 404
  }
}
