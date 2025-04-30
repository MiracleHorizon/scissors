import { useState } from 'react'

import { MAX_NORMALISE, MIN_NORMALISE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'

const initialNormaliseState: {
  value: boolean
  lower: number | null
  upper: number | null
} = {
  value: false,
  lower: MIN_NORMALISE,
  upper: MAX_NORMALISE
} as const

export const NormaliseSlider = () => {
  const [normalise, setNormalise] = useState(initialNormaliseState)

  return (
    <Slider
      label='Normalise'
      valueSign='%'
      value={[normalise.lower, normalise.upper]}
      defaultValue={[MIN_NORMALISE, MAX_NORMALISE]}
      min={MIN_NORMALISE}
      max={MAX_NORMALISE}
      minStepsBetweenThumbs={1}
      onValueChange={values => {
        if (normalise.lower !== values[0]) {
          setNormalise(prevState => ({ ...prevState, lower: values[0] }))
        }

        if (normalise.upper !== values[1]) {
          setNormalise(prevState => ({ ...prevState, upper: values[1] }))
        }
      }}
    />
  )
}
