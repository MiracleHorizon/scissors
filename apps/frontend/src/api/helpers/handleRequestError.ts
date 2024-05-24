import { FetchException } from '@api/exceptions/FetchException'
import type { RequestError } from '@api/errors/RequestError'

export const defaultErrorMessage = 'Something went wrong. Please try again later.'
export const internalServerErrorMessage = 'Internal Server Error'
export const timeoutErrorMessage =
  'Server response waiting time has been exceeded. Please try again later.'

/**
 * @param payload - error from the request
 * @returns error message for display to the user
 */
export const handleRequestError = (payload: RequestError | FetchException): string => {
  if (payload instanceof FetchException) {
    if (payload.cause instanceof DOMException && payload.cause.name === 'AbortError') {
      return timeoutErrorMessage
    }

    return defaultErrorMessage
  }

  const { status, statusText } = payload

  if (status < 400 || status === 400 || statusText === internalServerErrorMessage) {
    return defaultErrorMessage
  }

  return statusText
}
