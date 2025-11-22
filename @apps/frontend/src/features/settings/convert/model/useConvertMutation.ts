import type { ConvertSettings } from '@scissors/sharp'
import { useMutation } from '@tanstack/react-query'

import { convertImage } from '../api/convert'
import { toast } from 'sonner'

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

      console.log(
        'converted',
        new File([imageBlob], fileName, {
          type: settings.outputFormat ? `image/${settings.outputFormat}` : file.type
        })
      )

      return {
        file: new File([imageBlob], fileName, {
          type: settings.outputFormat ? `image/${settings.outputFormat}` : file.type
        }),
        name: fileName,
        link: URL.createObjectURL(imageBlob)
      }
    },
    onSuccess: data => {
      onSuccess?.(data)
      toast.success('Изображение конвертировано', {
        id: 'convert-mutation-success',
        position: 'bottom-center',
        richColors: true,
        closeButton: true
      })
    },
    onError: error => {
      onError?.(error)
      toast.error('Не удалось конвертировать изображение', {
        id: 'convert-mutation-error',
        position: 'bottom-center',
        richColors: true,
        closeButton: true
      })
    }
  })
