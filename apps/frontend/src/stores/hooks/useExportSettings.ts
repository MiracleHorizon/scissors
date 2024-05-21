import { useCallback } from 'react'

import { useConvertSettings } from './useConvertSettings'
import { useResizeSettings } from './useResizeSettings'
import { createAndDownloadJSON } from '@utility/json-file'
import { TOOLBAR_TAB, type ToolbarTab } from '@stores/tabs'

export function useExportSettings(selectedTab: ToolbarTab) {
  const convertSettings = useConvertSettings()
  const resizeSettings = useResizeSettings()

  const collectExportPayload = useCallback(() => {
    switch (selectedTab) {
      case TOOLBAR_TAB.CONVERT:
        return {
          fileName: 'scissors-settings-convert',
          settings: convertSettings
        }
      case TOOLBAR_TAB.RESIZE:
        return {
          fileName: 'scissors-settings-resize',
          settings: resizeSettings
        }
      default:
        return null
    }
  }, [convertSettings, resizeSettings, selectedTab])

  const exportSettings = useCallback(() => {
    const exportPayload = collectExportPayload()
    if (!exportPayload) return

    const { fileName, settings: payload } = exportPayload

    createAndDownloadJSON({
      fileName,
      payload
    })
  }, [collectExportPayload])

  return { exportSettings }
}
