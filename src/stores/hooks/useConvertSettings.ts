import { useConvertStore } from '@stores/convert'
import { useResizeStore } from '@stores/resize'
import { useExtendStore } from '@stores/extend'
import { useRotateStore } from '@stores/rotate'
import { useModulateStore } from '@stores/modulate'
import { useBlurStore } from '@stores/blur'
import { useNegateStore } from '@stores/negate'
import { useGammaStore } from '@stores/gamma'
import { useNormaliseStore } from '@stores/normalise'
import { useTintStore } from '@stores/tint'
import { useOutputStore } from '@stores/output'
import type { ConvertSettings } from '@server/Sharp'

export function useConvertSettings(): ConvertSettings {
  const convertSettings = useConvertStore(state => state.getConvertSettings())
  const resize = useResizeStore(state => state.getResizeOptions())
  const extend = useExtendStore(state => state.getExtendOptions())
  const rotate = useRotateStore(state => state.getRotateOptions())
  const modulate = useModulateStore(state => state.getModulateOptions())
  const blur = useBlurStore(state => state.getBlurOptions())
  const negate = useNegateStore(state => state.getNegateOptions())
  const gamma = useGammaStore(state => state.gamma)
  const normalise = useNormaliseStore(state => state.getNormaliseOptions())
  const tint = useTintStore(state => state.color)
  const outputFormat = useOutputStore(state => state.getOutputFormat())

  return {
    ...convertSettings,
    resize,
    extend,
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
