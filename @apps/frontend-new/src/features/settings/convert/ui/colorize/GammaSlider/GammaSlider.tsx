import { useState } from 'react'

import { GAMMA_STEP, MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { Slider } from '@/shared/ui'

export const GammaSlider = () => {
  const [gamma, setGamma] = useState(MIN_GAMMA)

  /* TODO: Add grayscale 
    disabled={isGrayscaleEnabled}
  */

  return (
    <Slider
      label='Gamma'
      value={[gamma]}
      defaultValue={[MIN_GAMMA]}
      step={GAMMA_STEP}
      min={MIN_GAMMA}
      max={MAX_GAMMA}
      onValueChange={values => setGamma(values[0] ?? null)}
    />
  )
}
