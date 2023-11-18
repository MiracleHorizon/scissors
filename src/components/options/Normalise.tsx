import { useCallback } from 'react'

import { OptionSlider } from '@components/OptionSlider'
import { useConvertStore } from '@stores/convert'
import { MAX_NORMALISE, MIN_NORMALISE } from '@libs/Sharp'

export function Normalise() {
  const lower = useConvertStore(state => state.normalise?.lower)
  const upper = useConvertStore(state => state.normalise?.upper)

  const setLowerNormalise = useConvertStore(state => state.setLowerNormalise)
  const setUpperNormalise = useConvertStore(state => state.setUpperNormalise)

  const onValueChange = useCallback(
    (value: number[]) => {
      if (lower !== value[0]) setLowerNormalise(value[0])
      if (upper !== value[1]) setUpperNormalise(value[1])
    },
    [setLowerNormalise, setUpperNormalise, lower, upper]
  )

  return (
    <OptionSlider
      title='Normalise'
      valueSign='%'
      value={[lower ?? MIN_NORMALISE, upper ?? MAX_NORMALISE]}
      defaultValue={[MIN_NORMALISE, MAX_NORMALISE]}
      min={MIN_NORMALISE}
      max={MAX_NORMALISE}
      minStepsBetweenThumbs={1}
      onValueChange={onValueChange}
    />
  )
}
