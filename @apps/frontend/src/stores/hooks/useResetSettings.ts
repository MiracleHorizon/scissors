

import { useCallback } from 'react'

import { TOOLBAR_TAB, type ToolbarTab } from '@stores/tabs'
import { useConvertStore } from '@stores/convert'
import { useOutputStore } from '@stores/output'
import { useRotateStore } from '@stores/rotate'
import { useModulateStore } from '@stores/modulate'
import { useBlurStore } from '@stores/blur'
import { useNegateStore } from '@stores/negate'
import { useGammaStore } from '@stores/gamma'
import { useNormaliseStore } from '@stores/normalise'
import { useTintStore } from '@stores/tint'
import { useResizeStore } from '@stores/resize'
import { useExtendStore } from '@stores/extend'
import { useExtractStore } from '@stores/extract'
import { useTrimStore } from '@stores/trim'

export const useResetConvertSettings = () => {
  const resetBasic = useConvertStore(state => state.reset)
  const resetOutputFileName = useOutputStore(state => state.resetOutputFileName)
  const resetRotate = useRotateStore(state => state.reset)
  const resetModulate = useModulateStore(state => state.reset)
  const resetBlur = useBlurStore(state => state.reset)
  const resetNegate = useNegateStore(state => state.reset)
  const resetGamma = useGammaStore(state => state.reset)
  const resetNormalise = useNormaliseStore(state => state.reset)
  const resetTint = useTintStore(state => state.reset)

  const handleReset = useCallback(() => {
    resetBasic()
    resetOutputFileName()
    resetRotate()
    resetModulate()
    resetBlur()
    resetNegate()
    resetGamma()
    resetNormalise()
    resetTint()
  }, [
    resetBasic,
    resetOutputFileName,
    resetRotate,
    resetModulate,
    resetBlur,
    resetGamma,
    resetNegate,
    resetNormalise,
    resetTint
  ])

  return { handleReset }
}

export const useResetResizeSettings = () => {
  const resetResize = useResizeStore(state => state.reset)
  const resetExtend = useExtendStore(state => state.reset)
  const resetExtract = useExtractStore(state => state.reset)
  const resetTrim = useTrimStore(state => state.reset)

  const handleReset = useCallback(() => {
    resetResize()
    resetExtend()
    resetExtract()
    resetTrim()
  }, [resetResize, resetExtend, resetExtract, resetTrim])

  return { handleReset }
}

export const useResetSettings = (selectedTab: ToolbarTab) => {
  const { handleReset: resetConvertSettings } = useResetConvertSettings()
  const { handleReset: resetResizeSettings } = useResetResizeSettings()

  const handleReset = useCallback(() => {
    switch (selectedTab) {
      case TOOLBAR_TAB.CONVERT:
        resetConvertSettings()
        break
      case TOOLBAR_TAB.RESIZE:
        resetResizeSettings()
        break
      default:
        break
    }
  }, [resetConvertSettings, resetResizeSettings, selectedTab])

  return { handleReset }
}
