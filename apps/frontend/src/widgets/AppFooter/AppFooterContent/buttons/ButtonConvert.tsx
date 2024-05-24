import { useCallback } from 'react'

import { ButtonRequest } from '../ButtonRequest'
import { useConvertMutation } from '@api/convert-image'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'

export const ButtonConvert=()=> {
  const file = useOutputStore(state => state.getFileForProcessing())
  const fileName = useOutputStore(state => state.getFullFileName())
  const isLoading = useRequestStore(state => state.isLoading)
  const setLoading = useRequestStore(state => state.setLoading)
  const convertSettings = useConvertSettings()

  const { mutate: convert, error, reset } = useConvertMutation()

  const handleConvert = useCallback(() => {
    if (!file) return

    setLoading(true)
    void convert({
      file,
      fileName,
      settings: convertSettings
    })
  }, [file, fileName, convertSettings, setLoading, convert])

  const handleRetry = useCallback(() => {
    if (isLoading) return

    handleConvert()
  }, [isLoading, handleConvert])

  return (
    <ButtonRequest
      label='Convert'
      makeRequest={handleConvert}
      retry={handleRetry}
      reset={reset}
      error={error}
      isLoading={isLoading}
    />
  )
}
