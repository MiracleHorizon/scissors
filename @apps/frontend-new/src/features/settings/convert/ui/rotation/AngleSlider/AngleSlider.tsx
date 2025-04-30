import { useState } from 'react'

import { DEFAULT_ROTATE_ANGLE, MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'

export const AngleSlider = () => {
  const [angle, setAngle] = useState<number | null>(DEFAULT_ROTATE_ANGLE)

  return (
    <Slider
      float
      label='Angle'
      valueSign='°'
      value={[angle]}
      defaultValue={[DEFAULT_ROTATE_ANGLE]}
      min={MIN_ROTATE_ANGLE}
      max={MAX_ROTATE_ANGLE}
      onValueChange={values => setAngle(values[0] ?? null)}
    />
  )
}
