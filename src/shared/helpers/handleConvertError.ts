import type { AxiosError } from 'axios'

export const defaultErrorMessage = 'Something went wrong. Please try again later.'
export const internalServerErrorMessage = 'Internal Server Error'
export const timeoutErrorMessage =
  'Server response waiting time has been exceeded. Please try again later.'

export function handleConvertError(error: AxiosError): string {
  if (error.config?.signal?.aborted || error.message === 'canceled') {
    return timeoutErrorMessage
  }

  const response = error.response

  if (!response || response.status < 400) {
    return defaultErrorMessage
  }

  if (response.statusText === internalServerErrorMessage) {
    return defaultErrorMessage
  }

  return response.statusText
}
