export class NFRecordErr extends Error {
  message: string
  status: number
  constructor() {
    super()
    this.name = 'NFRecordErr'
    this.message = 'Record not found.'
    this.status = 404
  }
}
