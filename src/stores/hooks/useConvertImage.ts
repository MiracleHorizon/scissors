import { useCallback } from 'react'

import { useConvertMutation } from '@api/convertImage'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { useOutputStore } from '@stores/output'

export function useConvertImage() {
  const file = useOutputStore(state => state.file)
  const fileName = useOutputStore(state => state.getFullFileName())
  const convertSettings = useConvertSettings()

  const { mutate, ...rest } = useConvertMutation()

  const handleConvertImage = useCallback(() => {
    if (!file) return

    mutate({
      file,
      fileName,
      settings: convertSettings
    })
  }, [file, fileName, convertSettings, mutate])

  return {
    handleConvertImage,
    ...rest
  }
}
