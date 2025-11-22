import { DEFAULT_NORMALIZE, MAX_NORMALIZE, MIN_NORMALIZE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const NormalizeSlider = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'normalize'
  })

  return (
    <Slider
      label='Normalization'
      valueSign='%'
      value={[value.lower, value.upper]}
      defaultValue={[DEFAULT_NORMALIZE.lower, DEFAULT_NORMALIZE.upper]}
      min={MIN_NORMALIZE}
      max={MAX_NORMALIZE}
      minStepsBetweenThumbs={1}
      onValueChange={values => {
        onChange({
          lower: values[0] ?? value.lower,
          upper: values[1] ?? value.upper
        })
      }}
    />
  )
}
