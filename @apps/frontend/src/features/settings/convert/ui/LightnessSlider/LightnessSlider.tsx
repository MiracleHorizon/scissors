import { MAX_LIGHTNESS, MIN_LIGHTNESS } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const LightnessSlider = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'lightness'
  })

  return (
    <Slider
      float
      label='Lightness'
      valueSign='%'
      value={[value]}
      defaultValue={[MIN_LIGHTNESS]}
      min={MIN_LIGHTNESS}
      max={MAX_LIGHTNESS}
      onValueChange={values => onChange(values[0] ?? null)}
    />
  )
}
