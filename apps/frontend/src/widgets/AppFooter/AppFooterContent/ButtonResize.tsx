import { useCallback } from 'react'

import { ButtonRequest } from './ButtonRequest'
import { useResizeMutation } from '@api/resize-image'
import { useResizeSettings } from '@stores/hooks/useResizeSettings'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'

export function ButtonResize() {
  const file = useOutputStore(state => state.file)
  const fileName = useOutputStore(state => state.getFullFileName())
  const setLoading = useRequestStore(state => state.setLoading)
  const resizeSettings = useResizeSettings()

  const { mutate: resize, isPending: isLoading, error, reset } = useResizeMutation()

  const handleResize = useCallback(() => {
    if (!file) return

    setLoading(true)
    resize({
      file,
      fileName,
      settings: resizeSettings
    })
  }, [file, fileName, resize, resizeSettings, setLoading])

  const handleRetry = useCallback(() => {
    if (isLoading) return

    handleResize()
  }, [isLoading, handleResize])

  return (
    <ButtonRequest
      label='Resize'
      makeRequest={handleResize}
      retry={handleRetry}
      reset={reset}
      error={error}
      isLoading={isLoading}
      isDisabled={resizeSettings.queue.length === 0}
    />
  )
}
