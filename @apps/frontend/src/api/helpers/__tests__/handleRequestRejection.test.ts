import {
  DEFAULT_ERROR_MESSAGE,
  handleRequestRejection,
  INTERNAL_ERROR_MESSAGE,
  TIMEOUT_ERROR_MESSAGE
} from '@api/helpers/handleRequestRejection'
import { RequestError } from '@api/errors/RequestError'
import { FetchException } from '@api/exceptions/FetchException'

describe('@api/helpers/handleRequestError', () => {
  it('should return default error message because request is aborted', () => {
    const error = new FetchException({
      cause: new DOMException('Aborted', 'AbortError')
    })

    expect(handleRequestRejection(error)).toBe(TIMEOUT_ERROR_MESSAGE)
  })

  it('should return default error message because error is instance of {FetchException}', () => {
    const error = new FetchException()

    expect(handleRequestRejection(error)).toBe(DEFAULT_ERROR_MESSAGE)
  })

  it('should return default error message because error instance of {RequestError} and status less than 400', () => {
    const error = new RequestError({
      status: 308,
      statusText: 'foo'
    })

    expect(handleRequestRejection(error)).toBe(DEFAULT_ERROR_MESSAGE)
  })

  it(`should return default error message because error instance of {RequestError} and status text is "${INTERNAL_ERROR_MESSAGE}"`, () => {
    const error = new RequestError({
      status: 500,
      statusText: INTERNAL_ERROR_MESSAGE
    })

    expect(handleRequestRejection(error)).toBe(DEFAULT_ERROR_MESSAGE)
  })

  it('should return correct error status text', () => {
    const statusText1 = 'File is not found'
    const statusText2 = DEFAULT_ERROR_MESSAGE
    const statusText3 = DEFAULT_ERROR_MESSAGE

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

    expect(handleRequestRejection(error1)).toBe(statusText1)
    expect(handleRequestRejection(error2)).toBe(statusText2)
    expect(handleRequestRejection(error3)).toBe(statusText3)
  })
})
