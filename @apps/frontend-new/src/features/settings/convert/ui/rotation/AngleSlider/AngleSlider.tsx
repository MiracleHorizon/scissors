import { DEFAULT_ROTATE_ANGLE, MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useRotateStore } from '../../../model/rotation/rotation.store'

export const AngleSlider = () => {
  const angle = useRotateStore(state => state.angle)
  const setAngle = useRotateStore(state => state.setAngle)

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
