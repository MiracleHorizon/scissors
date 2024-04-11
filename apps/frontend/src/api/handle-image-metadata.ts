import { useState } from 'react'

import type { MetadataSettings } from '@scissors/sharp'

import { type DownloadPayload, useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import { createApiURL } from '@site/config'
import { PATH_API_METADATA } from '@site/paths'
import { ABORT_TIMEOUT } from './config'
import type { MutationPayload } from './types'

async function handleImageMetadata(formData: FormData): Promise<Blob> {
  const abortController = new AbortController()

  try {
    setTimeout(() => {
      abortController.abort()
    }, ABORT_TIMEOUT)

    const url = createApiURL(PATH_API_METADATA)
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

async function handleImageMetadataMutation({
  file,
  fileName,
  settings
}: MutationPayload<MetadataSettings>): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const imageBlob = await handleImageMetadata(formData)
  const link = URL.createObjectURL(imageBlob)

  const newFile = new File([imageBlob], fileName, {
    type: file.type
  })

  return {
    link,
    fileName,
    file: newFile
  }
}

export function useMetadataMutation() {
  const [error, setError] = useState<unknown>(null)

  const setLoading = useRequestStore(state => state.setLoading)
  const setDownloadPayload = useOutputStore(state => state.setDownloadPayload)

  async function mutate(payload: MutationPayload<MetadataSettings>) {
    try {
      if (error) setError(null)

      setLoading(true)
      const downloadPayload = await handleImageMetadataMutation(payload)
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
