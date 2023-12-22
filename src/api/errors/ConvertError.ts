interface Constructor {
  status: number
  statusText: string
}

export class ConvertError extends Error {
  public readonly status: number
  public readonly statusText: string

  constructor({ status, statusText }: Constructor) {
    super(statusText)

    this.name = 'ConvertError'
    this.status = status
    this.statusText = statusText
  }
}
