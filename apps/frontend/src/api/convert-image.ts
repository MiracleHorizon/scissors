import { useState } from 'react'

import type { ConvertSettings } from '@scissors/sharp'

import { type DownloadPayload, useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import { createApiURL } from '@site/config'
import { PATH_API_CONVERT } from '@site/paths'
import { ABORT_TIMEOUT } from './config'
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

  const newFile = new File([imageBlob], fileName, {
    type: settings.outputFormat ? `image/${settings.outputFormat}` : file.type
  })

  return {
    link,
    fileName,
    file: newFile
  }
}

export function useConvertMutation() {
  const [error, setError] = useState<unknown>(null)

  const setLoading = useRequestStore(state => state.setLoading)
  const setDownloadPayload = useOutputStore(state => state.setDownloadPayload)

  async function mutate(payload: MutationPayload<ConvertSettings>) {
    try {
      if (error) setError(null)

      setLoading(true)
      const downloadPayload = await convertImageMutation(payload)
      setDownloadPayload(downloadPayload)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setError(null)
  }

  return {
    mutate,
    error,
    reset
  }
}
