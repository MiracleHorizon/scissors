import { useCallback } from 'react'

import { useConvertSettings } from './useConvertSettings'
import { useResizeSettings } from './useResizeSettings'
import { TOOLBAR_TAB, type ToolbarTab } from '@stores/tabs'

const FILE_EXTENSION = 'json'

export function useExportSettings(selectedTab: ToolbarTab) {
  const convertSettings = useConvertSettings()
  const resizeSettings = useResizeSettings()

  const collectExportPayload = useCallback(() => {
    switch (selectedTab) {
      case TOOLBAR_TAB.CONVERT:
        return {
          fileName: 'morph-settings-convert',
          settings: convertSettings
        }
      case TOOLBAR_TAB.RESIZE:
        return {
          fileName: 'morph-settings-resize',
          settings: resizeSettings
        }
      default:
        return null
    }
  }, [convertSettings, resizeSettings, selectedTab])

  function createSettingsBlob<S extends Record<string, any>>(settings: S) {
    const settingsJSON = JSON.stringify(settings, null, 2)
    const blob = new Blob([settingsJSON], {
      type: `application/${FILE_EXTENSION}`
    })

    return { blob }
  }

  function downloadFile({ blob, fileName }: { blob: Blob; fileName: string }) {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${fileName}.${FILE_EXTENSION}`
    link.click()
  }

  const exportSettings = useCallback(() => {
    const exportPayload = collectExportPayload()
    if (!exportPayload) return

    const { fileName, settings } = exportPayload
    const { blob } = createSettingsBlob(settings)

    downloadFile({
      blob,
      fileName
    })
  }, [collectExportPayload])

  return { exportSettings }
}
