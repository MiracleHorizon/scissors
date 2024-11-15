export class RequestError extends Error {
  public readonly status: number
  public readonly statusText: string

  constructor({ status, statusText }: { status: number; statusText: string }) {
    super(statusText)

    this.name = 'RequestError'
    this.status = status
    this.statusText = statusText
  }
}
