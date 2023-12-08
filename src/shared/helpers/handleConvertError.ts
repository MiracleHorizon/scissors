import type { AxiosError } from 'axios'

export const defaultErrorMessage = 'Something went wrong. Please try again later.'
export const internalServerErrorMessage = 'Internal Server Error'

export function handleConvertError(error: AxiosError): string {
  const response = error.response

  if (!response || response.status < 400) {
    return defaultErrorMessage
  }

  if (response.statusText === internalServerErrorMessage) {
    return defaultErrorMessage
  }

  return response.statusText
}
