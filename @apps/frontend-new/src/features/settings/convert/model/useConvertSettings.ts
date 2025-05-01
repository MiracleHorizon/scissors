import {
  DEFAULT_LOWER_NORMALIZE,
  DEFAULT_UPPER_NORMALIZE,
  type ConvertSettings
} from '@scissors/sharp'

import { useCommonStore } from './common/common.store'
import { useAdvancedStore } from './advanced/advanced.store'
import { useRotationStore } from './rotation/rotation.store'
import { useGammaStore } from './colorization/gamma.store'
import { useTintStore } from './colorization/tint.store'
import { useModulationStore } from './modulation/modulation.store'

export const useConvertSettings = (): ConvertSettings => {
  const common = useCommonStore(state => state.getCommon())
  const advanced = useAdvancedStore(state => state.getAdvanced())
  const rotation = useRotationStore(state => state.getRotation())
  const gamma = useGammaStore(state => state.get())

  const modulate = useModulationStore(state => {
    const options = state.getModulation()

    if (!options) {
      return null
    }

    /*
     * The enabled grayscale option overrides the other options for working
     * with image color.
     */
    if (common.grayscale) {
      return {
        ...options,
        hue: null
      }
    }

    return options
  })
  const tint = useTintStore(state => {
    /*
     * The enabled grayscale option overrides the other options for working
     * with image color.
     */
    if (common.grayscale) {
      return null
    }

    return state.value
  })

  // const outputFormat = useOutputStore(state => state.getOutputFormat())

  return {
    ...common,
    ...advanced,
    negate: {
      value: common.negate,
      alpha: false
    },
    normalize: {
      lower: advanced?.normalize.lower ?? DEFAULT_LOWER_NORMALIZE,
      upper: advanced?.normalize.upper ?? DEFAULT_UPPER_NORMALIZE
    },
    rotate: rotation,
    modulate,
    blur: {
      value: Boolean(advanced?.blurSigma),
      sigma: advanced?.blurSigma ?? null
    },
    gamma,
    tint,
    // TODO: add output format
    outputFormat: 'jpeg'
  }
}
