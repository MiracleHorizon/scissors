import { useState } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import {
  BLUR_SIGMA_STEP,
  MAX_BLUR_SIGMA,
  MAX_NORMALISE,
  MIN_BLUR_SIGMA,
  MIN_NORMALISE
} from '@scissors/sharp'

import { Slider } from '@/shared/ui'

const initialBlurState: {
  value: boolean
  sigma: number | null
} = {
  value: false,
  sigma: MIN_BLUR_SIGMA
} as const

const initialNormaliseState: {
  value: boolean
  lower: number | null
  upper: number | null
} = {
  value: false,
  lower: MIN_NORMALISE,
  upper: MAX_NORMALISE
} as const

export const Advanced = () => {
  const [blur, setBlur] = useState(initialBlurState)
  const [normalise, setNormalise] = useState(initialNormaliseState)

  return (
    <Flex direction='column' gap='2'>
      <Flex direction='column' gap='2'>
        <Slider
          label='Blur'
          value={[blur.sigma]}
          defaultValue={[MIN_BLUR_SIGMA]}
          min={MIN_BLUR_SIGMA}
          max={MAX_BLUR_SIGMA}
          step={BLUR_SIGMA_STEP}
          onValueChange={values =>
            setBlur({
              value: Boolean(values[0]),
              sigma: values[0] ?? null
            })
          }
        />
      </Flex>

      <Separator size='4' />

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
    </Flex>
  )
}
