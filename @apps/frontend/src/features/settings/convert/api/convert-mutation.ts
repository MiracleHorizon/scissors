import { useMutation } from '@tanstack/react-query'

import type { ConvertSettings } from '@scissors/sharp'

import { SERVER_API } from '@/shared/config'

const convertImage = async (formData: FormData): Promise<Blob> => {
  try {
    const response = await fetch(`${SERVER_API}/api/v1/convert`, {
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

/* eslint-disable no-unused-vars */
export const useConvertMutation = ({
  onSuccess,
  onError
}: {
  onSuccess?: (data: DownloadableFile) => void
  onError?: (error: unknown) => void
} = {}) =>
  useMutation({
    mutationKey: ['convert-image'],
    mutationFn: async ({
      file,
      fileName,
      settings
    }: {
      file: File
      fileName: string
      settings: ConvertSettings
    }): Promise<DownloadableFile> => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('settings', JSON.stringify(settings))

      const imageBlob = await convertImage(formData)

      return {
        file: new File([imageBlob], fileName, {
          type: settings.outputFormat ? `image/${settings.outputFormat}` : file.type
        }),
        name: fileName,
        link: URL.createObjectURL(imageBlob)
      }
    },
    onSuccess,
    onError
  })
