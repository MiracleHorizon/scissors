'use client'

import { useCallback } from 'react'
import { RotateCounterClockwiseIcon } from '@radix-ui/react-icons'

import { OptionSlider } from '@components/OptionSlider'
import { useConvertStore } from '@stores/convert'
import { DEFAULT_ROTATE_ANGLE, MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@libs/Sharp'

export function SliderRotateAngle() {
  const rotateAngle = useConvertStore(state => state.rotate?.angle)

  const setRotateAngle = useConvertStore(state => state.setRotateAngle)

  const handleRotateAngleChange = useCallback(
    (value: number[]) => setRotateAngle(value[0]),
    [setRotateAngle]
  )

  return (
    <OptionSlider
      title='Rotate angle'
      titleIcon={<RotateCounterClockwiseIcon width='18px' height='18px' />}
      valueSign='°'
      value={[rotateAngle ?? DEFAULT_ROTATE_ANGLE]}
      defaultValue={[DEFAULT_ROTATE_ANGLE]}
      min={MIN_ROTATE_ANGLE}
      max={MAX_ROTATE_ANGLE}
      onValueChange={handleRotateAngleChange}
    />
  )
}
