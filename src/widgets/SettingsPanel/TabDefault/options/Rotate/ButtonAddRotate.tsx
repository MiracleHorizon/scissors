'use client'

import { useCallback } from 'react'

import { RotateCounterClockwiseIcon } from '@ui/icons/RotateCounterClockwiseIcon'
import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useRotateStore } from '@stores/rotate'

export function ButtonAddRotate() {
  const addRotate = useRotateStore(state => state.add)

  const handleAddRotate = useCallback(() => addRotate(), [addRotate])

  return (
    <ButtonAddOption
      label='Add Rotation'
      leadIcon={<RotateCounterClockwiseIcon width='18px' height='18px' />}
      onClick={handleAddRotate}
    />
  )
}
