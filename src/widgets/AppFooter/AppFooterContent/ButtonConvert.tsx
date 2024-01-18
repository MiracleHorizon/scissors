import { useCallback } from 'react'

import { ButtonRequest } from './ButtonRequest'
import { useConvertMutation } from '@api/convertImage'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'

export function ButtonConvert() {
  const file = useOutputStore(state => state.file)
  const fileName = useOutputStore(state => state.getFullFileName())
  const setLoading = useRequestStore(state => state.setLoading)
  const convertSettings = useConvertSettings()

  const { mutate: convert, error, isPending, reset } = useConvertMutation()

  const handleConvert = useCallback(() => {
    if (!file) return

    setLoading(true)
    convert({
      file,
      fileName,
      settings: convertSettings
    })
  }, [file, fileName, convert, convertSettings, setLoading])

  const handleRetry = useCallback(() => {
    if (isPending) return

    handleConvert()
  }, [isPending, handleConvert])

  return (
    <ButtonRequest
      label='Convert'
      isPending={isPending}
      error={error}
      makeRequest={handleConvert}
      retry={handleRetry}
      reset={reset}
    />
  )
}
