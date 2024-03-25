import { useCallback } from 'react'

import { MAX_NORMALISE, MIN_NORMALISE } from '@scissors/sharp'

import { OptionSlider } from '@components/OptionSlider'
import { useNormaliseStore } from '@stores/normalise'

export function SliderNormalise() {
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
    <OptionSlider
      value={[lower, upper]}
      valueSign='%'
      defaultValue={[MIN_NORMALISE, MAX_NORMALISE]}
      min={MIN_NORMALISE}
      max={MAX_NORMALISE}
      minStepsBetweenThumbs={1}
      onValueChange={onValueChange}
    />
  )
}
