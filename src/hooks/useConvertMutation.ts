import { useMutation } from '@tanstack/react-query'

import { convertImage } from '@api/convertImage'
import { useOutputStore } from '@stores/output'
import { cropFileNameExtension } from '@helpers/cropFileNameExtension'
import type { ConvertSettings } from '@libs/Sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'

interface ConvertPayload {
  file: File
  outputFileName: string | null
  settings: ConvertSettings
}

async function convertImageMutation({
  file,
  outputFileName,
  settings
}: ConvertPayload): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const url = window.location.origin + '/api/convert'
  const imageBlob = await convertImage({ url, formData })

  const link = URL.createObjectURL(imageBlob)
  const fileFormat = file.type.replace('image/', '')
  const convertFormat = settings.format

  const outputFormat = convertFormat ?? fileFormat
  const outputName =
    !outputFileName || outputFileName.length === 0
      ? cropFileNameExtension(file.name)
      : outputFileName
  const fileName = `${outputName}.${outputFormat}`

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
