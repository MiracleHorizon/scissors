import { useCallback } from 'react'

import { RotateCounterClockwiseIcon } from '@scissors/react-icons/RotateCounterClockwiseIcon'

import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useRotateStore } from '@stores/rotate'

export const ButtonAddRotate = () => {
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
