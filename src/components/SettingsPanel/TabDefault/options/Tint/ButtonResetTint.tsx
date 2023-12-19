import { useCallback } from 'react'

import { ButtonReset } from '@components/ButtonReset'
import { useTintStore } from '@stores/tint'

export function ButtonResetTint() {
  const resetTint = useTintStore(state => state.reset)

  const handleResetTint = useCallback(() => resetTint(), [resetTint])

  return <ButtonReset tooltipTitle='Reset tint' onClick={handleResetTint} />
}
