import { useMutation } from '@tanstack/react-query'

import { convertImage } from '@api/convertImage'
import { useConvertStore } from '@stores/convert'
import { cropFileNameExtension } from '@helpers/cropFileNameExtension'
import type { ConvertSettings } from '@libs/Sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'

interface ConvertPayload {
  file: File
  settings: ConvertSettings
}

async function convertImageMutation({ file, settings }: ConvertPayload): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const url = window.location.origin + '/api/convert'
  const imageBlob = await convertImage({ url, formData })

  const link = URL.createObjectURL(imageBlob)
  const fileFormat = file.type.replace('image/', '')
  const convertFormat = settings.format
  const fileName = `${cropFileNameExtension(file.name)}.${convertFormat ?? fileFormat}`

  return { link, fileName }
}

export function useConvertMutation() {
  const setDownloadPayload = useConvertStore(state => state.setDownloadPayload)

  return useMutation({
    mutationKey: ['convert'],
    mutationFn: convertImageMutation,
    onSuccess: downloadPayload => setDownloadPayload(downloadPayload)
  })
}
