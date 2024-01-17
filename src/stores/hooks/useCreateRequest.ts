import { useCallback } from 'react'

import { useOutputStore } from '@stores/output'
import { useConvertMutation } from '@api/convertImage'
import { useResizeMutation } from '@api/resizeImage'
import { useConvertSettings } from './useConvertSettings'
import { useResizeSettings } from './useResizeSettings'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'

export function useCreateRequest() {
  const tab = useTabsStore(state => state.selectedTab) as keyof typeof TOOLBAR_TAB
  const file = useOutputStore(state => state.file)
  const fileName = useOutputStore(state => state.getFullFileName())

  const convertSettings = useConvertSettings()
  const resizeSettings = useResizeSettings()

  const { mutate: convertMutation, ...convertRest } = useConvertMutation()
  const { mutate: resizeMutation, ...resizeRest } = useResizeMutation()

  const getRequest = useCallback(() => {
    switch (tab) {
      case TOOLBAR_TAB.RESIZE:
        return {
          trigger: () => {
            if (!file) return

            resizeMutation({
              file,
              fileName,
              settings: resizeSettings
            })
          },
          ...resizeRest
        }
      default:
        return {
          trigger: () => {
            if (!file) return

            convertMutation({
              file,
              fileName,
              settings: convertSettings
            })
          },
          ...convertRest
        }
    }
  }, [
    tab,
    file,
    fileName,
    convertSettings,
    resizeSettings,
    convertMutation,
    resizeMutation,
    convertRest,
    resizeRest
  ])

  return {
    getRequest
  }
}
