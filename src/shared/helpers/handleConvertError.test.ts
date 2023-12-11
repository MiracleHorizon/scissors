import { describe, expect, it } from 'vitest'
import type { AxiosError } from 'axios'

import {
  defaultErrorMessage,
  handleConvertError,
  internalServerErrorMessage,
  timeoutErrorMessage
} from './handleConvertError'

describe('handleConvertError', () => {
  it('should return default error message because error is canceled', () => {
    expect(
      handleConvertError({
        config: {
          signal: {
            aborted: true
          }
        }
      } as AxiosError)
    ).toBe(timeoutErrorMessage)
  })

  it('should return default error message because error message is "canceled"', () => {
    expect(
      handleConvertError({
        message: 'canceled'
      } as AxiosError)
    ).toBe(timeoutErrorMessage)
  })

  it('should return default error message because error response is not defined', () => {
    expect(handleConvertError({} as AxiosError)).toBe(defaultErrorMessage)
  })

  it('should return default error message because error status less than 400', () => {
    expect(
      handleConvertError({
        response: {
          status: 308
        }
      } as AxiosError)
    ).toBe(defaultErrorMessage)
  })

  it(`should return default error message because error status text is "${internalServerErrorMessage}"`, () => {
    expect(
      handleConvertError({
        response: {
          status: 500,
          statusText: internalServerErrorMessage
        }
      } as AxiosError)
    ).toBe(defaultErrorMessage)
  })

  it('should return correct error status text', () => {
    const statusText1 = 'File is not found'
    const statusText2 = 'Invalid convert settings'

    expect(
      handleConvertError({
        response: {
          status: 404,
          statusText: statusText1
        }
      } as AxiosError)
    ).toBe(statusText1)
    expect(
      handleConvertError({
        response: {
          status: 400,
          statusText: statusText2
        }
      } as AxiosError)
    ).toBe(statusText2)
  })
})
