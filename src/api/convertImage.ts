import { useMutation } from '@tanstack/react-query'

import { useOutputStore } from '@stores/output'
import { ConvertError } from './errors/ConvertError'
import { FetchException } from './exceptions/FetchException'
import type { ConvertSettings } from '@server/Sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'

interface ConvertPayload {
  url: string
  formData: FormData
}

async function convertImage({ url, formData }: ConvertPayload): Promise<Blob> {
  const abortController = new AbortController()
  const abortTimeout = 15_000

  try {
    setTimeout(() => {
      abortController.abort()
    }, abortTimeout)

    const response = await fetch(url, {
      body: formData,
      method: 'POST',
      signal: abortController.signal
    })

    if (response.ok) {
      return response.blob()
    }

    return Promise.reject(
      new ConvertError({
        status: response.status,
        statusText: response.statusText
      })
    )
  } catch (err) {
    throw new FetchException({
      cause: err
    })
  }
}

interface MutationPayload {
  file: File
  fileName: string
  settings: ConvertSettings
}

async function convertImageMutation({
  file,
  fileName,
  settings
}: MutationPayload): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const requestURL = window.location.origin + '/api/convert'
  const imageBlob = await convertImage({
    url: requestURL,
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

export const errorMessages = {
  missingFile: 'No image file is available',
  missingSettings: 'No conversion settings are available',
  invalidFileSize: 'Invalid file size',
  invalidSettings: 'Invalid convert settings',
  invalidDataTransferObject: 'Invalid data transfer object'
}
