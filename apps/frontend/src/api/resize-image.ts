import { useState } from 'react'

import type { ResizeSettings } from '@scissors/sharp'

import { type DownloadPayload, useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import { createApiURL } from '@site/config'
import { PATH_API_RESIZE } from '@site/paths'
import { ABORT_TIMEOUT } from './config'
import type { MutationPayload } from './types'

const resizeImage = async (formData: FormData): Promise<Blob> => {
  const abortController = new AbortController()

  try {
    setTimeout(() => {
      abortController.abort()
    }, ABORT_TIMEOUT)

    const url = createApiURL(PATH_API_RESIZE)
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

const resizeImageMutation = async ({
  file,
  fileName,
  settings
}: MutationPayload<ResizeSettings>): Promise<DownloadPayload> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const imageBlob = await resizeImage(formData)
  const link = URL.createObjectURL(imageBlob)

  const outputFileName = fileName

  // TODO: rework
  // const { resize } = settings
  // if (resize && resize.width && resize.height) {
  //   outputFileName = addImageSizesToFileName({
  //     fullFileName: outputFileName,
  //     width: resize.width,
  //     height: resize.height
  //   })
  // }

  const newFile = new File([imageBlob], outputFileName, {
    type: file.type
  })

  return {
    link,
    fileName: outputFileName,
    file: newFile
  }
}

export const useResizeMutation = () => {
  const [error, setError] = useState<unknown>(null)

  const setLoading = useRequestStore(state => state.setLoading)
  const setDownloadPayload = useOutputStore(state => state.setDownloadPayload)

  const reset = () => setError(null)

  const mutate = async (payload: MutationPayload<ResizeSettings>) => {
    try {
      if (error) setError(null)

      setLoading(true)
      const downloadPayload = await resizeImageMutation(payload)
      setDownloadPayload(downloadPayload)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    mutate,
    error,
    reset
  }
}
