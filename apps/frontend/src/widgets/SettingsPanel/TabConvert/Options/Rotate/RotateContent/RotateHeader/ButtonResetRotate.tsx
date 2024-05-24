import { useCallback } from 'react'

import { useRotateStore } from '@stores/rotate'
import { ButtonReset } from '@ui/ButtonReset'

export const ButtonResetRotate=()=> {
  const resetRotate = useRotateStore(state => state.reset)

  const handleResetRotate = useCallback(() => resetRotate(), [resetRotate])

  return <ButtonReset tooltipContent='Reset Rotation' onClick={handleResetRotate} />
}
