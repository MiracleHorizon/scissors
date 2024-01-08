'use client'

import { useCallback } from 'react'

import { OptionSlider } from '@components/OptionSlider'
import { useRotateStore } from '@stores/rotate'
import { DEFAULT_ROTATE_ANGLE, MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@server/Sharp'

export function SliderRotateAngle() {
  const angle = useRotateStore(state => state.angle)

  const setRotateAngle = useRotateStore(state => state.setAngle)

  const handleRotateAngleChange = useCallback(
    (value: number[]) => setRotateAngle(value[0]),
    [setRotateAngle]
  )

  return (
    <OptionSlider
      valueSign='°'
      value={[angle ?? DEFAULT_ROTATE_ANGLE]}
      defaultValue={[DEFAULT_ROTATE_ANGLE]}
      min={MIN_ROTATE_ANGLE}
      max={MAX_ROTATE_ANGLE}
      onValueChange={handleRotateAngleChange}
    />
  )
}
