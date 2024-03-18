import { useMutation } from '@tanstack/react-query'

import { useOutputStore, type DownloadPayload } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import { createApiURL } from '@site/config'
import { PATH_API_CONVERT } from '@site/paths'
import { ABORT_TIMEOUT } from './config'
import type { ConvertSettings } from '@server/sharp'
import type { MutationPayload } from './types'

async function convertImage(formData: FormData): Promise<Blob> {
  const abortController = new AbortController()

  try {
    setTimeout(() => {
      abortController.abort()
    }, ABORT_TIMEOUT)

    const url = createApiURL(PATH_API_CONVERT)
    const response = await fetch(url, {
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

async function convertImageMutation({
  file,
  fileName,
  settings
}: MutationPayload<ConvertSettings>): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const imageBlob = await convertImage(formData)
  const link = URL.createObjectURL(imageBlob)

  return {
    link,
    fileName,
    blob: imageBlob
  }
}

export function useConvertMutation() {
  const setDownloadPayload = useOutputStore(state => state.setDownloadPayload)
  const setLoading = useRequestStore(state => state.setLoading)

  return useMutation({
    mutationKey: ['convert'],
    mutationFn: convertImageMutation,
    onSuccess: downloadPayload => setDownloadPayload(downloadPayload),
    onSettled: () => setLoading(false)
  })
}
