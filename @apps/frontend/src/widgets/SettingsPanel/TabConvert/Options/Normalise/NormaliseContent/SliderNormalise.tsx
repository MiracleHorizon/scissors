import { useCallback } from 'react'

import { MAX_NORMALIZE, MIN_NORMALIZE } from '@scissors/sharp'

import { Slider } from '@lib/ui/Slider'
import { useNormaliseStore } from '@stores/normalise'

export const SliderNormalise = () => {
  const lower = useNormaliseStore(state => state.lower)
  const upper = useNormaliseStore(state => state.upper)

  const setLower = useNormaliseStore(state => state.setLower)
  const setUpper = useNormaliseStore(state => state.setUpper)

  const onValueChange = useCallback(
    (value: number[]) => {
      if (lower !== value[0]) setLower(value[0])
      if (upper !== value[1]) setUpper(value[1])
    },
    [setLower, setUpper, lower, upper]
  )

  return (
    <Slider
      value={[lower, upper]}
      valueSign='%'
      defaultValue={[MIN_NORMALIZE, MAX_NORMALIZE]}
      min={MIN_NORMALIZE}
      max={MAX_NORMALIZE}
      minStepsBetweenThumbs={1}
      cySelector='slider-normalise'
      onValueChange={onValueChange}
    />
  )
}
