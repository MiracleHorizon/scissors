import { useCallback } from 'react'

import { useConvertMutation } from './useConvertMutation'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { useOutputStore } from '@stores/output'

export function useConvertImage() {
  const file = useOutputStore(state => state.file)
  const outputFileName = useOutputStore(state => state.outputFileName)
  const isValidOutputFileName = useOutputStore(state => state.isValidOutputFileName())
  const convertSettings = useConvertSettings()

  const { mutate, ...rest } = useConvertMutation()

  const handleConvertImage = useCallback(() => {
    if (!file) return

    mutate({
      file,
      settings: convertSettings,
      outputFileName: isValidOutputFileName ? outputFileName : null
    })
  }, [file, mutate, convertSettings, isValidOutputFileName, outputFileName])

  return {
    handleConvertImage,
    ...rest
  }
}
