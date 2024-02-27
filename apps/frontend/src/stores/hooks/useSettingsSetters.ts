import { useMemo } from 'react'

import { useConvertStore } from '@stores/convert'
import { useResizeStore } from '@stores/resize'
import { useExtendStore } from '@stores/extend'
import { useTrimStore } from '@stores/trim'
import { useRotateStore } from '@stores/rotate'
import { useModulateStore } from '@stores/modulate'
import { useBlurStore } from '@stores/blur'
import { useNegateStore } from '@stores/negate'
import { useGammaStore } from '@stores/gamma'
import { useNormaliseStore } from '@stores/normalise'
import { useTintStore } from '@stores/tint'
import { useOutputStore } from '@stores/output'

export function useSettingsSetters() {
  const setFlip = useConvertStore(state => state.setFlip)
  const setFlop = useConvertStore(state => state.setFlop)
  const setGrayscale = useConvertStore(state => state.setGrayscale)
  const setRotate = useRotateStore(state => state.set)
  const setResize = useResizeStore(state => state.set)
  const setExtend = useExtendStore(state => state.set)
  const setTrim = useTrimStore(state => state.set)
  const setBlur = useBlurStore(state => state.set)
  const setTint = useTintStore(state => state.set)
  const setNegate = useNegateStore(state => state.set)
  const setGamma = useGammaStore(state => state.set)
  const setNormalise = useNormaliseStore(state => state.set)
  const setModulate = useModulateStore(state => state.set)
  const setOutputFormat = useOutputStore(state => state.setOutputFormat)

  const setters = useMemo(
    () => ({
      flip: setFlip,
      flop: setFlop,
      grayscale: setGrayscale,
      rotate: setRotate,
      resize: setResize,
      extend: setExtend,
      trim: setTrim,
      blur: setBlur,
      tint: setTint,
      negate: setNegate,
      gamma: setGamma,
      modulate: setModulate,
      normalise: setNormalise,
      outputFormat: setOutputFormat
    }),
    [
      setTrim,
      setBlur,
      setFlip,
      setFlop,
      setGamma,
      setGrayscale,
      setModulate,
      setNegate,
      setNormalise,
      setResize,
      setExtend,
      setRotate,
      setTint,
      setOutputFormat
    ]
  )

  return { setters }
}
