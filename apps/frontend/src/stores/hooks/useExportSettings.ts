import { useCallback } from 'react'

import { useConvertSettings } from './useConvertSettings'
import { useResizeSettings } from './useResizeSettings'
import { useExportJSON } from '@hooks/useExportJSON'
import { TOOLBAR_TAB, type ToolbarTab } from '@stores/tabs'

export const useExportSettings = (selectedTab: ToolbarTab) => {
  const { handleExportJSON } = useExportJSON()

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

    handleExportJSON({
      fileName,
      payload
    })
  }, [collectExportPayload, handleExportJSON])

  return { exportSettings }
}
