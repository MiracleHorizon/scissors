import { DEFAULT_ROTATE_ANGLE, MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { OptionSlider } from '@components/OptionSlider'
import { useRotateStore } from '@stores/rotate'

export function SliderRotateAngle() {
  const angle = useRotateStore(state => state.angle)

  const setAngle = useRotateStore(state => state.setAngle)
  const handleChangeAngle = (value: number[]) => {
    if (value.length === 1) {
      return setAngle(value[0])
    }

    setAngle(null)
  }

  return (
    <OptionSlider
      valueSign='°'
      value={[angle]}
      defaultValue={[DEFAULT_ROTATE_ANGLE]}
      min={MIN_ROTATE_ANGLE}
      max={MAX_ROTATE_ANGLE}
      allowFloat
      onValueChange={handleChangeAngle}
    />
  )
}
