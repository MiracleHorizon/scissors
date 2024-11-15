import type { ResizeSettings } from '@scissors/sharp'

import type { DownloadableFile } from '@/shared/lib'
import { createApiURL, FetchException, RequestError } from '@/shared/api'
import { ABORT_TIMEOUT } from './config'
import { createImageFormData } from '../lib/createImageFormData'
import { useImageMutation } from './use-image-mutation'
import type { MutationPayload } from './types'

const resizeImage = async (formData: FormData): Promise<Blob> => {
  const abortController = new AbortController()

  try {
    setTimeout(() => {
      abortController.abort()
    }, ABORT_TIMEOUT)

    const response = await fetch(createApiURL('resize'), {
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
    console.log(err)

    throw new FetchException({
      cause: err
    })
  }
}

// TODO: Image sizes for file name
export const useResizeMutation = () =>
  useImageMutation(
    async ({
      file,
      fileName,
      settings
    }: MutationPayload<ResizeSettings>): Promise<DownloadableFile> => {
      const formData = createImageFormData({
        file,
        settings
      })
      const imageBlob = await resizeImage(formData)
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
  )
