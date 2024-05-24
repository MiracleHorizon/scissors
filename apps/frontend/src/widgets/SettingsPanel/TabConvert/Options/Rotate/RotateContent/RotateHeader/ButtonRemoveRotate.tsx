import { useCallback } from 'react'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useRotateStore } from '@stores/rotate'

export const ButtonRemoveRotate=()=> {
  const removeRotate = useRotateStore(state => state.remove)

  const handleRemoveRotate = useCallback(() => removeRotate(), [removeRotate])

  return <ButtonDelete tooltipContent='Remove Rotation' onClick={handleRemoveRotate} />
}
