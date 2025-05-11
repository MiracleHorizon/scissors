import { useMemo } from 'react'

import { useCommonStore } from './common/common.store'
import { useRotationStore } from './rotation/rotation.store'
import { useAdvancedStore } from './advanced/advanced.store'
import { useGammaStore } from './colorization/gamma.store'
import { useModulationStore } from './modulation/modulation.store'
import { useTintStore } from './colorization/tint.store'

export const useSettingsSetters = () => {
  const setFlip = useCommonStore(state => state.setFlip)
  const setFlop = useCommonStore(state => state.setFlop)
  const setGrayscale = useCommonStore(state => state.setGrayscale)
  const setRotate = useRotationStore(state => state.set)
  const setBlur = useAdvancedStore(state => state.setBlurSigma)
  const setTint = useTintStore(state => state.set)
  const setNegate = useCommonStore(state => state.setNegate)
  const setGamma = useGammaStore(state => state.set)
  const setNormalize = useAdvancedStore(state => state.setNormalize)
  const setModulate = useModulationStore(state => state.set)
  // const setOutputFormat = useOutputStore(state => state.setOutputFormat)

  return useMemo(
    () => ({
      flip: setFlip,
      flop: setFlop,
      grayscale: setGrayscale,
      rotate: setRotate,
      blur: setBlur,
      tint: setTint,
      negate: setNegate,
      gamma: setGamma,
      modulate: setModulate,
      normalize: setNormalize
      // outputFormat: setOutputFormat
    }),
    [
      setBlur,
      setFlip,
      setFlop,
      setGamma,
      setGrayscale,
      setModulate,
      setNegate,
      setNormalize,
      setRotate,
      setTint
      // setOutputFormat
    ]
  )
}
