import { useState } from 'react'

import { MAX_LIGHTNESS, MIN_LIGHTNESS } from '@scissors/sharp'

import { Slider } from '@/shared/ui'

export const LightnessSlider = () => {
  const [lightness, setLightness] = useState(MIN_LIGHTNESS)

  return (
    <Slider
      float
      label='Lightness'
      valueSign='%'
      value={[lightness]}
      defaultValue={[MIN_LIGHTNESS]}
      min={MIN_LIGHTNESS}
      max={MAX_LIGHTNESS}
      onValueChange={values => setLightness(values[0] ?? null)}
    />
  )
}
