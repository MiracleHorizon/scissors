import { FetchException } from '@api/exceptions/FetchException'
import type { RequestError } from '@api/errors/RequestError'

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again later.'
export const INTERNAL_ERROR_MESSAGE = 'Internal Server Error'
export const TIMEOUT_ERROR_MESSAGE =
  'Server response waiting time has been exceeded. Please try again later.'

/**
 * @param payload - error from the request
 * @returns error message for display to the user
 */
export const handleRequestRejection = (payload: RequestError | FetchException): string => {
  if (payload instanceof FetchException) {
    if (payload.cause instanceof DOMException && payload.cause.name === 'AbortError') {
      return TIMEOUT_ERROR_MESSAGE
    }

    return DEFAULT_ERROR_MESSAGE
  }

  const { status, statusText } = payload

  if (status < 400 || status === 400 || statusText === INTERNAL_ERROR_MESSAGE) {
    return DEFAULT_ERROR_MESSAGE
  }

  return statusText
}
