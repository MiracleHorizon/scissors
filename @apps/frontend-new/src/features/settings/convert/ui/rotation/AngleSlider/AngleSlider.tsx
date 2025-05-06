import { DEFAULT_ROTATE_ANGLE, MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useRotationStore } from '../../../model/rotation/rotation.store'

export const AngleSlider = () => {
  const angle = useRotationStore(state => state.angle)
  const setAngle = useRotationStore(state => state.setAngle)

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
