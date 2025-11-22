import {
  DEFAULT_BLUR_SIGMA,
  BLUR_SIGMA_STEP,
  MAX_BLUR_SIGMA,
  MIN_BLUR_SIGMA
} from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const BlurSigmaSlider = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'blurSigma'
  })

  return (
    <Slider
      float
      label='Blur'
      value={[value]}
      defaultValue={[DEFAULT_BLUR_SIGMA]}
      min={MIN_BLUR_SIGMA}
      max={MAX_BLUR_SIGMA}
      step={BLUR_SIGMA_STEP}
      onValueChange={values => onChange(values[0] ?? null)}
    />
  )
}
