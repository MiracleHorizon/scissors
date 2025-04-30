import { useState } from 'react'

import { BRIGHTNESS_STEP, MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@scissors/sharp'

import { Slider } from '@/shared/ui'

export const BrightnessSlider = () => {
  const [brightness, setBrightness] = useState(MIN_BRIGHTNESS)

  return (
    <Slider
      float
      label='Brightness'
      value={[brightness]}
      defaultValue={[MIN_BRIGHTNESS]}
      min={MIN_BRIGHTNESS}
      max={MAX_BRIGHTNESS}
      step={BRIGHTNESS_STEP}
      onValueChange={values => setBrightness(values[0] ?? null)}
    />
  )
}
