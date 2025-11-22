import { DEFAULT_ROTATE_ANGLE, MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const AngleSlider = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'rotationAngle'
  })

  return (
    <Slider
      float
      label='Angle'
      valueSign='°'
      value={[value]}
      defaultValue={[DEFAULT_ROTATE_ANGLE]}
      min={MIN_ROTATE_ANGLE}
      max={MAX_ROTATE_ANGLE}
      onValueChange={values => onChange(values[0] ?? null)}
    />
  )
}
