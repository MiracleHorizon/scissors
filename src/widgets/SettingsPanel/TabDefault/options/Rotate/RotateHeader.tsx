'use client'

import { RotateCounterClockwiseIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetRotate } from './ButtonResetRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'
import { useRotateStore } from '@stores/rotate'
import { DEFAULT_ROTATE_ANGLE } from '@server/Sharp'

export function RotateHeader() {
  const rotateAngle = useRotateStore(state => state.angle)

  return (
    <OptionSectionHeader
      title={`Rotate: ${rotateAngle ?? DEFAULT_ROTATE_ANGLE}°`}
      icon={<RotateCounterClockwiseIcon width='18px' height='18px' />}
    >
      <>
        <ButtonResetRotate />
        <ButtonRemoveRotate />
      </>
    </OptionSectionHeader>
  )
}
