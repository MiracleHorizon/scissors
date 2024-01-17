'use client'

import { useCallback } from 'react'

import { ButtonExport } from '@ui/ButtonExport'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'
import { useResizeSettings } from '@stores/hooks/useResizeSettings'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'

export function ButtonExportSettings() {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const convertSettings = useConvertSettings()
  const resizeSettings = useResizeSettings()

  const getExportPayload = useCallback(() => {
    switch (selectedTab) {
      case TOOLBAR_TAB.DEFAULT:
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

  const exportSettings = useCallback(() => {
    const exportPayload = getExportPayload()

    if (!exportPayload) return

    const settingsJSON = JSON.stringify(exportPayload.settings, null, 2)
    const blob = new Blob([settingsJSON], {
      type: 'application/json'
    })

    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${exportPayload.fileName}.json`
    link.click()
  }, [getExportPayload])

  return <ButtonExport tooltipContent='Export Settings' onClick={exportSettings} />
}
