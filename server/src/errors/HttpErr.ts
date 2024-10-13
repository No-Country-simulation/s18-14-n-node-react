export default class HttpErr extends Error {
  status: number
  msg: string
  description?: string | string[] | undefined

  constructor(status: number, msg: string, description?: string | string[] | undefined) {
    super()
    this.status = status
    this.msg = msg
    this.description = description ?? undefined
  }
}
