import { useMutation } from '@tanstack/react-query'

import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import { RequestError } from './errors/RequestError'
import { FetchException } from './exceptions/FetchException'
import { createApiURL } from '@site/config'
import { PATH_API_RESIZE } from '@site/paths'
import { ABORT_TIMEOUT } from './config'
import { cropFileName } from '@helpers/file/cropFileName'
import type { ResizeSettings } from '@server/sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'
import type { MutationPayload } from './types'

async function resizeImage(formData: FormData): Promise<Blob> {
  const abortController = new AbortController()

  try {
    setTimeout(() => {
      abortController.abort()
    }, ABORT_TIMEOUT)

    const url = createApiURL(PATH_API_RESIZE)
    const response = await fetch(url, {
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
    throw new FetchException({
      cause: err
    })
  }
}

async function resizeImageMutation({
  file,
  fileName,
  settings
}: MutationPayload<ResizeSettings>): Promise<DownloadPayload> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  const imageBlob = await resizeImage(formData)
  const link = URL.createObjectURL(imageBlob)

  let outputFileName = fileName
  const { resize } = settings
  if (resize && resize.width && resize.height) {
    // TODO: Refactor
    const fileNameWithoutExtension = cropFileName(outputFileName)
    const extension = outputFileName.replace(fileNameWithoutExtension, '')

    outputFileName = `${cropFileName(outputFileName)}-${resize.width}x${resize.height}${extension}`
  }

  return {
    link,
    fileName: outputFileName,
    blob: imageBlob
  }
}

export function useResizeMutation() {
  const setDownloadPayload = useOutputStore(state => state.setDownloadPayload)
  const setLoading = useRequestStore(state => state.setLoading)

  return useMutation({
    mutationKey: ['resize'],
    mutationFn: resizeImageMutation,
    onSuccess: downloadPayload => setDownloadPayload(downloadPayload),
    onSettled: () => setLoading(false)
  })
}
