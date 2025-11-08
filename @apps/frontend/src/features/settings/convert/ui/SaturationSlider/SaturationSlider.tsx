import { MAX_SATURATION, MIN_SATURATION, SATURATION_STEP } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const SaturationSlider = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'saturation'
  })

  return (
    <Slider
      label='Saturation'
      value={[value]}
      defaultValue={[MIN_SATURATION]}
      min={MIN_SATURATION}
      max={MAX_SATURATION}
      step={SATURATION_STEP}
      onValueChange={values => onChange(values[0] ?? null)}
    />
  )
}
