import { useMutation } from '@tanstack/react-query'

import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import type { ResizeSettings } from '@server/sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'
import type { MutationPayload, RequestPayload } from './types'

async function resizeImage({ baseURL, formData }: RequestPayload): Promise<Blob> {
  const abortController = new AbortController()
  const abortTimeout = 15_000

  try {
    setTimeout(() => {
      abortController.abort()
    }, abortTimeout)

    const response = await fetch(baseURL + '/api/resize', {
      body: formData,
      method: 'POST',
      signal: abortController.signal
    })

    if (response.ok) {
      return response.blob()
    }

    return Promise.reject(
      new RequestError({
        status: response.status,
        statusText: response.statusText
      })
    )
  } catch (err) {
    throw new FetchException({
      cause: err
    })
  }
}

export async function resizeImageMutation({
  file,
  fileName,
  settings
}: MutationPayload<ResizeSettings>): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const imageBlob = await resizeImage({
    baseURL: window.location.origin,
    formData
  })
  const link = URL.createObjectURL(imageBlob)

  return {
    link,
    fileName
  }
}

export function useResizeMutation() {
  const setDownloadPayload = useOutputStore(state => state.setDownloadPayload)
  const setLoading = useRequestStore(state => state.setLoading)

  return useMutation({
    mutationKey: ['resize'],
    mutationFn: resizeImageMutation,
    onSuccess: downloadPayload => setDownloadPayload(downloadPayload),
    onSettled: () => setLoading(false)
  })
}

export const errorMessages = {
  missingFile: 'No image file is available',
  missingSettings: 'No resize settings are available',
  invalidFileSize: 'Invalid file size',
  invalidSettings: 'Invalid resize settings',
  invalidDataTransferObject: 'Invalid data transfer object'
}
