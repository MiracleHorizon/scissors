import { BRIGHTNESS_STEP, MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const BrightnessSlider = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'brightness'
  })

  return (
    <Slider
      float
      label='Brightness'
      value={[value]}
      defaultValue={[MIN_BRIGHTNESS]}
      min={MIN_BRIGHTNESS}
      max={MAX_BRIGHTNESS}
      step={BRIGHTNESS_STEP}
      onValueChange={values => onChange(values[0] ?? null)}
    />
  )
}
