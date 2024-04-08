import {
  defaultErrorMessage,
  handleRequestError,
  internalServerErrorMessage,
  timeoutErrorMessage
} from '@api/helpers/handleRequestError'
import { RequestError } from '@api/errors/RequestError'
import { FetchException } from '@api/exceptions/FetchException'

describe('@api/helpers/handleRequestError', () => {
  it('should return default error message because request is aborted', () => {
    const error = new FetchException({
      cause: new DOMException('Aborted', 'AbortError')
    })

    expect(handleRequestError(error)).toBe(timeoutErrorMessage)
  })

  it('should return default error message because error is instance of {FetchException}', () => {
    const error = new FetchException()

    expect(handleRequestError(error)).toBe(defaultErrorMessage)
  })

  it('should return default error message because error instance of {RequestError} and status less than 400', () => {
    const error = new RequestError({
      status: 308,
      statusText: 'foo'
    })

    expect(handleRequestError(error)).toBe(defaultErrorMessage)
  })

  it(`should return default error message because error instance of {RequestError} and status text is "${internalServerErrorMessage}"`, () => {
    const error = new RequestError({
      status: 500,
      statusText: internalServerErrorMessage
    })

    expect(handleRequestError(error)).toBe(defaultErrorMessage)
  })

  it('should return correct error status text', () => {
    const statusText1 = 'File is not found'
    const statusText2 = defaultErrorMessage
    const statusText3 = defaultErrorMessage

    const error1 = new RequestError({
      status: 404,
      statusText: statusText1
    })
    const error2 = new RequestError({
      status: 400,
      statusText: statusText2
    })
    const error3 = new RequestError({
      status: 400,
      statusText: statusText3
    })

    expect(handleRequestError(error1)).toBe(statusText1)
    expect(handleRequestError(error2)).toBe(statusText2)
    expect(handleRequestError(error3)).toBe(statusText3)
  })
})
