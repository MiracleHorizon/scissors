import type { ConvertSettings } from '@scissors/sharp'

import { SERVER_API } from '@/shared/config'
import { useMutation } from '@/shared/model'

const convertImage = async (formData: FormData): Promise<Blob> => {
  try {
    const response = await fetch(`${SERVER_API}/convert`, {
      body: formData,
      method: 'POST',
      signal: AbortSignal.timeout(15_000)
    })

    if (response.ok) {
      return response.blob()
    }

    return Promise.reject(response)
  } catch (err) {
    console.error(err)

    return Promise.reject(err)
  }
}

export const useConvertMutation = () =>
  useMutation({
    fetcher: async ({
      file,
      fileName,
      settings
    }: {
      file: File
      fileName: string
      settings: ConvertSettings
    }): Promise<{
      file: File
      fileName: string
      link: string
    }> => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('settings', JSON.stringify(settings))

      const imageBlob = await convertImage(formData)

      return {
        fileName,
        file: new File([imageBlob], fileName, {
          type: settings.outputFormat ? `image/${settings.outputFormat}` : file.type
        }),
        link: URL.createObjectURL(imageBlob)
      }
    }
  })
