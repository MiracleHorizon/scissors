import {
  defaultErrorMessage,
  handleConvertError,
  internalServerErrorMessage,
  timeoutErrorMessage
} from './handleConvertError'
import { ConvertError } from '@api/errors/ConvertError'
import { FetchException } from '@api/exceptions/FetchException'

describe('@lib/helpers/handleConvertError', () => {
  it('should return default error message because request is aborted', () => {
    const error = new FetchException({
      cause: new DOMException('Aborted', 'AbortError')
    })

    expect(handleConvertError(error)).toBe(timeoutErrorMessage)
  })

  it('should return default error message because error is instance of {FetchException}', () => {
    const error = new FetchException()

    expect(handleConvertError(error)).toBe(defaultErrorMessage)
  })

  it('should return default error message because error instance of {ConvertError} and status less than 400', () => {
    const error = new ConvertError({
      status: 308,
      statusText: 'foo'
    })

    expect(handleConvertError(error)).toBe(defaultErrorMessage)
  })

  it(`should return default error message because error instance of {ConvertError} and status text is "${internalServerErrorMessage}"`, () => {
    const error = new ConvertError({
      status: 500,
      statusText: internalServerErrorMessage
    })

    expect(handleConvertError(error)).toBe(defaultErrorMessage)
  })

  it('should return correct error status text', () => {
    const statusText1 = 'File is not found'
    const statusText2 = 'Invalid convert settings'

    const error1 = new ConvertError({
      status: 404,
      statusText: statusText1
    })
    const error2 = new ConvertError({
      status: 400,
      statusText: statusText2
    })

    expect(handleConvertError(error1)).toBe(statusText1)
    expect(handleConvertError(error2)).toBe(statusText2)
  })
})
