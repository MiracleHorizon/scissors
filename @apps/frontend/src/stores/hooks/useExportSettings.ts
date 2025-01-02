import { useCallback } from 'react'

import { useConvertSettings } from './useConvertSettings'
import { useResizeSettings } from './useResizeSettings'
import { TOOLBAR_TAB, type ToolbarTab } from '@stores/tabs'
import { createAndDownloadJSONFile } from '@utility/json-file'
import { SITE_TITLE } from '@site/config'

const FILE_NAME_PREFIX = `${SITE_TITLE}-settings`

export const useExportSettings = (selectedTab: ToolbarTab) => {
  const convertSettings = useConvertSettings()
  const resizeSettings = useResizeSettings()

  const collectExportPayload = useCallback(() => {
    switch (selectedTab) {
      case TOOLBAR_TAB.CONVERT:
        return {
          fileName: `${FILE_NAME_PREFIX}-convert`,
          settings: convertSettings
        }
      case TOOLBAR_TAB.RESIZE:
        return {
          fileName: `${FILE_NAME_PREFIX}-resize`,
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

    createAndDownloadJSONFile({
      fileName,
      payload
    })
  }, [collectExportPayload])

  return { exportSettings }
}
