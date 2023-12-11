import { useCallback } from 'react'

import { useConvertStore } from '@stores/convert'
import { useConvertMutation } from './useConvertMutation'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'

export function useConvertImage() {
  const file = useConvertStore(state => state.file)
  const convertSettings = useConvertSettings()

  const { mutate, ...rest } = useConvertMutation()

  const handleConvertImage = useCallback(() => {
    if (!file) return

    mutate({
      file,
      settings: convertSettings
    })
  }, [mutate, file, convertSettings])

  return {
    handleConvertImage,
    ...rest
  }
}
