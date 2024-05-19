import { useCallback } from 'react'

import { RotateCounterClockwiseIcon } from '@scissors/react-icons/RotateCounterClockwiseIcon'

import { ButtonAddOption } from '@widgets/settings-panel/button-add-option'
import { useRotateStore } from '@stores/rotate'

export function ButtonAddRotate() {
  const addRotate = useRotateStore(state => state.add)

  const handleAddRotate = useCallback(() => addRotate(), [addRotate])

  return (
    <ButtonAddOption
      label='Add Rotation'
      leadIcon={<RotateCounterClockwiseIcon width='18px' height='18px' label='add rotation' />}
      onClick={handleAddRotate}
    />
  )
}
