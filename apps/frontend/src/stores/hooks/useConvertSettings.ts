import { useConvertStore } from '@stores/convert'
import { useRotateStore } from '@stores/rotate'
import { useModulateStore } from '@stores/modulate'
import { useBlurStore } from '@stores/blur'
import { useNegateStore } from '@stores/negate'
import { useGammaStore } from '@stores/gamma'
import { useNormaliseStore } from '@stores/normalise'
import { useTintStore } from '@stores/tint'
import { useOutputStore } from '@stores/output'
import type { ConvertSettings } from '@scissors/sharp'

export function useConvertSettings(): ConvertSettings {
  const convertSettings = useConvertStore(state => state.getConvertSettings())
  const rotate = useRotateStore(state => state.getRotateOptions())
  const blur = useBlurStore(state => state.getBlurOptions())
  const negate = useNegateStore(state => state.getNegateOptions())
  const gamma = useGammaStore(state => state.getGammaValue())
  const normalise = useNormaliseStore(state => state.getNormaliseOptions())
  const outputFormat = useOutputStore(state => state.getOutputFormat())
  const modulate = useModulateStore(state => {
    const modulateOptions = state.getModulateOptions()

    if (!modulateOptions) {
      return null
    }

    /*
     * The enabled grayscale option overrides the other options for working
     * with image color.
     */
    if (convertSettings.grayscale) {
      return {
        ...modulateOptions,
        hue: null
      }
    }

    return modulateOptions
  })
  const tint = useTintStore(state => {
    /*
     * The enabled grayscale option overrides the other options for working
     * with image color.
     */
    if (convertSettings.grayscale) {
      return null
    }

    return state.color
  })

  return {
    ...convertSettings,
    rotate,
    modulate,
    blur,
    negate,
    gamma,
    normalise,
    tint,
    outputFormat
  }
}
