const message = 'Something went wrong with the request'

export class FetchException extends Error {
  constructor(options?: ErrorOptions) {
    super(message, options)
    this.name = 'FetchException'
  }
}
