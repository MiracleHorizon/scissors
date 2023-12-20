import { useCallback } from 'react'

import { useConvertStore } from '@stores/convert'
import { useOutputStore } from '@stores/output'
import { useResizeStore } from '@stores/resize'
import { useRotateStore } from '@stores/rotate'
import { useModulateStore } from '@stores/modulate'
import { useBlurStore } from '@stores/blur'
import { useNegateStore } from '@stores/negate'
import { useGammaStore } from '@stores/gamma'
import { useNormaliseStore } from '@stores/normalise'
import { useTintStore } from '@stores/tint'
import { useFormatStore } from '@stores/format'

export function useResetSettings() {
  const resetBasic = useConvertStore(state => state.reset)
  const resetOutputFileName = useOutputStore(state => state.resetOutputFileName)
  const resetResize = useResizeStore(state => state.reset)
  const resetRotate = useRotateStore(state => state.reset)
  const resetModulate = useModulateStore(state => state.reset)
  const resetBlur = useBlurStore(state => state.reset)
  const resetNegate = useNegateStore(state => state.reset)
  const resetGamma = useGammaStore(state => state.reset)
  const resetNormalise = useNormaliseStore(state => state.reset)
  const resetTint = useTintStore(state => state.reset)
  const resetFormat = useFormatStore(state => state.reset)

  const handleReset = useCallback(() => {
    resetBasic()
    resetOutputFileName()
    resetResize()
    resetRotate()
    resetModulate()
    resetBlur()
    resetNegate()
    resetGamma()
    resetNormalise()
    resetTint()
    resetFormat()
  }, [
    resetBasic,
    resetOutputFileName,
    resetResize,
    resetRotate,
    resetModulate,
    resetBlur,
    resetGamma,
    resetNegate,
    resetNormalise,
    resetTint,
    resetFormat
  ])

  return { handleReset }
}
