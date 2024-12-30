interface Constructor {
  status: number
  statusText: string
}

export class RequestError extends Error {
  public readonly status: number
  public readonly statusText: string

  constructor({ status, statusText }: Constructor) {
    super(statusText)

    this.name = 'RequestError'
    this.status = status
    this.statusText = statusText
  }
}
