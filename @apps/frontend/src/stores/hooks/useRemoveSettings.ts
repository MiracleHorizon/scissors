

import { useCallback } from 'react'

import { TOOLBAR_TAB, type ToolbarTab } from '@stores/tabs'
import { useRotateStore } from '@stores/rotate'
import { useModulateStore } from '@stores/modulate'
import { useGammaStore } from '@stores/gamma'
import { useTintStore } from '@stores/tint'
import { useNormaliseStore } from '@stores/normalise'
import { useTabResizeStore } from '@widgets/SettingsPanel/TabResize'

export const useRemoveConvertSettings = () => {
  const removeRotate = useRotateStore(state => state.remove)
  const removeModulate = useModulateStore(state => state.remove)
  const removeGamma = useGammaStore(state => state.remove)
  const removeTint = useTintStore(state => state.remove)
  const removeNormalise = useNormaliseStore(state => state.remove)

  const handleRemove = useCallback(() => {
    removeRotate()
    removeModulate()
    removeGamma()
    removeTint()
    removeNormalise()
  }, [removeRotate, removeModulate, removeGamma, removeTint, removeNormalise])

  return { handleRemove }
}

export const useRemoveResizeSettings = () => {
  const removeAllOperations = useTabResizeStore(state => state.removeAllOperations)

  const handleRemove = () => removeAllOperations()

  return { handleRemove }
}

export const useRemoveSettings = (selectedTab: ToolbarTab) => {
  const { handleRemove: removeConvertSettings } = useRemoveConvertSettings()
  const { handleRemove: removeResizeSettings } = useRemoveResizeSettings()

  const handleRemove = useCallback(() => {
    switch (selectedTab) {
      case TOOLBAR_TAB.CONVERT:
        removeConvertSettings()
        break
      case TOOLBAR_TAB.RESIZE:
        removeResizeSettings()
        break
      default:
        break
    }
  }, [removeConvertSettings, removeResizeSettings, selectedTab])

  return { handleRemove }
}
