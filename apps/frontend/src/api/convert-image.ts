import type { ConvertSettings } from '@scissors/sharp'

import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import { ABORT_TIMEOUT, HTTP_METHOD } from './config'
import { createImageProcessingFormData } from './helpers/createImageProcessingFormData'
import { PATH_API_CONVERT } from '@site/paths'
import { createApiURL } from '@site/config'
import { useImageMutation } from '@api/hooks/useImageMutation'
import type { MutationPayload } from './types'
import type { DownloadableFile } from '@app-types/DownloadableFile'

const convertImage = async (formData: FormData): Promise<Blob> => {
  const abortController = new AbortController()

  try {
    setTimeout(() => {
      abortController.abort()
    }, ABORT_TIMEOUT)

    const url = createApiURL(PATH_API_CONVERT)
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

const convertImageMutation = async ({
  file,
  fileName,
  settings
}: MutationPayload<ConvertSettings>): Promise<DownloadableFile> => {
  const formData = createImageProcessingFormData({
    file,
    settings
  })
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

export const useConvertMutation = () => useImageMutation(convertImageMutation)
