import { useState } from 'react'

import { MAX_SATURATION, MIN_SATURATION, SATURATION_STEP } from '@scissors/sharp'

import { Slider } from '@/shared/ui'

export const SaturationSlider = () => {
  const [saturation, setSaturation] = useState(MIN_SATURATION)

  return (
    <Slider
      label='Saturation'
      value={[saturation]}
      defaultValue={[MIN_SATURATION]}
      min={MIN_SATURATION}
      max={MAX_SATURATION}
      step={SATURATION_STEP}
      onValueChange={values => setSaturation(values[0] ?? null)}
    />
  )
}
