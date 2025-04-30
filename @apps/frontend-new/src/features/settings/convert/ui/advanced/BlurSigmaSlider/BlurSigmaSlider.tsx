import { useState } from 'react'

import { BLUR_SIGMA_STEP, MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@scissors/sharp'

import { Slider } from '@/shared/ui'

export const BlurSigmaSlider = () => {
  const [sigma, setSigma] = useState(MIN_BLUR_SIGMA)

  return (
    <Slider
      label='Blur'
      value={[sigma]}
      defaultValue={[MIN_BLUR_SIGMA]}
      min={MIN_BLUR_SIGMA}
      max={MAX_BLUR_SIGMA}
      step={BLUR_SIGMA_STEP}
      onValueChange={values => setSigma(values[0] ?? MIN_BLUR_SIGMA)}
    />
  )
}
