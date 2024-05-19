import { useCallback } from 'react'

import { ButtonReset } from '@ui/button-reset'
import { useTintStore } from '@stores/tint'

export function ButtonResetTint() {
  const resetTint = useTintStore(state => state.reset)

  const handleResetTint = useCallback(() => resetTint(), [resetTint])

  return <ButtonReset tooltipContent='Reset Tint' onClick={handleResetTint} />
}
