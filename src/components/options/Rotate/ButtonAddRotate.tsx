'use client'

import { useCallback } from 'react'
import { RotateCounterClockwiseIcon } from '@radix-ui/react-icons'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useRotateStore } from '@stores/rotate'

export function ButtonAddRotate() {
  const addRotate = useRotateStore(state => state.add)

  const handleAddRotate = useCallback(() => addRotate(), [addRotate])

  return (
    <ButtonAddOption
      title='Add rotate'
      leadIcon={<RotateCounterClockwiseIcon width='18px' height='18px' />}
      onClick={handleAddRotate}
    />
  )
}
