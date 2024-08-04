import { useCallback } from 'react'

import { ButtonRequest } from '../ButtonRequest'
import { useConvertMutation } from '@api/convert-image'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'

export const ButtonConvert = () => {
  const file = useOutputStore(state => state.getFileForProcessing())
  const fileName = useOutputStore(state => state.getFullFileName())
  const isLoading = useRequestStore(state => state.isLoading)
  const convertSettings = useConvertSettings()

  const { mutate: convert, error, reset } = useConvertMutation()

  const handleConvert = useCallback(() => {
    if (!file || isLoading) return

    void convert({
      file,
      fileName,
      settings: convertSettings
    })
  }, [isLoading, file, fileName, convertSettings, convert])

  return (
    <ButtonRequest
      label='Convert'
      makeRequest={handleConvert}
      retry={handleConvert}
      reset={reset}
      error={error}
      isLoading={isLoading}
      data-cy='button-convert'
    />
  )
}
