import type { MetadataSettings } from '@scissors/sharp'

import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import { ABORT_TIMEOUT, HTTP_METHOD } from './config'
import { createImageProcessingFormData } from './helpers/createImageProcessingFormData'
import { PATH_API_METADATA } from '@site/paths'
import { createApiURL } from '@site/config'
import { useImageMutation } from '@api/hooks/useImageMutation'
import type { MutationPayload } from './types'
import type { DownloadableFile } from '@app-types/DownloadableFile'

const updateImageMetadata = async (formData: FormData): Promise<Blob> => {
  const abortController = new AbortController()

  try {
    setTimeout(() => {
      abortController.abort()
    }, ABORT_TIMEOUT)

    const url = createApiURL(PATH_API_METADATA)
    const response = await fetch(url, {
      body: formData,
      method: HTTP_METHOD.POST,
      signal: abortController.signal
    })

    if (response.ok) {
      return response.blob()
    }

    const error = new RequestError({
      status: response.status,
      statusText: response.statusText
    })
    return Promise.reject(error)
  } catch (err) {
    console.log(err)

    throw new FetchException({
      cause: err
    })
  }
}

const updateImageMetadataMutation = async ({
  file,
  fileName,
  settings
}: MutationPayload<MetadataSettings>): Promise<DownloadableFile> => {
  const formData = createImageProcessingFormData({
    file,
    settings
  })
  const imageBlob = await updateImageMetadata(formData)

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

export const useMetadataMutation = () => useImageMutation(updateImageMetadataMutation)
