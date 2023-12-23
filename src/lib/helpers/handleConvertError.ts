import { FetchException } from '@api/exceptions/FetchException'
import type { ConvertError } from '@api/errors/ConvertError'

export const defaultErrorMessage = 'Something went wrong. Please try again later.'
export const internalServerErrorMessage = 'Internal Server Error'
export const timeoutErrorMessage =
  'Server response waiting time has been exceeded. Please try again later.'

/**
 * @param payload - error from the convert request
 * @returns error message for display to the user
 */
export function handleConvertError(payload: ConvertError | FetchException): string {
  if (payload instanceof FetchException) {
    if (payload.cause instanceof DOMException && payload.cause.name === 'AbortError') {
      return timeoutErrorMessage
    }

    return defaultErrorMessage
  }

  const { status, statusText } = payload

  if (status < 400 || statusText === internalServerErrorMessage) {
    return defaultErrorMessage
  }

  return statusText
}
