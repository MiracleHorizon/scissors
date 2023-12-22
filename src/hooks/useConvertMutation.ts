import { useMutation } from '@tanstack/react-query'

import { convertImage } from '@api/convertImage'
import { useOutputStore } from '@stores/output'
import type { ConvertSettings } from '@server/Sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'

interface ConvertPayload {
  file: File
  fileName: string
  settings: ConvertSettings
}

async function convertImageMutation({
  file,
  fileName,
  settings
}: ConvertPayload): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const url = window.location.origin + '/api/convert'
  const imageBlob = await convertImage({
    url,
    formData
  })
  const link = URL.createObjectURL(imageBlob)

  return {
    link,
    fileName
  }
}

export function useConvertMutation() {
  const setDownloadPayload = useOutputStore(state => state.setDownloadPayload)

  return useMutation({
    mutationKey: ['convert'],
    mutationFn: convertImageMutation,
    onSuccess: downloadPayload => setDownloadPayload(downloadPayload)
  })
}
