export class FetchException extends Error {
  constructor(options?: ErrorOptions) {
    super('Something went wrong with the request', options)
    this.name = 'FetchException'
  }
}
