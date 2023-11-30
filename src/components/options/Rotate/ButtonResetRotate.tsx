import { useCallback } from 'react'

import { ButtonReset } from '@components/ButtonReset'
import { useRotateStore } from '@stores/rotate'

export function ButtonResetRotate() {
  const resetRotate = useRotateStore(state => state.reset)

  const handleResetRotate = useCallback(() => resetRotate(), [resetRotate])

  return <ButtonReset tooltipTitle='Reset rotate' onClick={handleResetRotate} />
}
