import type { ResizeSettings } from '@scissors/sharp'

import { SERVER_API } from '@/shared/config'
import { useMutation } from '@/shared/model'

const resizeImage = async (formData: FormData): Promise<Blob> => {
  try {
    const response = await fetch(`${SERVER_API}/resize`, {
      body: formData,
      method: 'POST',
      signal: AbortSignal.timeout(15_000)
    })

    if (response.ok) {
      return response.blob()
    }

    return Promise.reject(response)
  } catch (err) {
    console.log(err)

    return Promise.reject(err)
  }
}

// TODO: Image sizes for file name
export const useResizeMutation = () =>
  useMutation({
    fetcher: async ({
      file,
      fileName,
      settings
    }: {
      file: File
      fileName: string
      settings: ResizeSettings
    }): Promise<{
      file: File
      fileName: string
      link: string
    }> => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('settings', JSON.stringify(settings))

      const imageBlob = await resizeImage(formData)

      return {
        fileName,
        link: URL.createObjectURL(imageBlob),
        file: new File([imageBlob], fileName, {
          type: settings.outputFormat ? `image/${settings.outputFormat}` : file.type
        })
      }
    }
  })
