import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useTintStore } from '@stores/tint'

export const ButtonResetTint = () => {
  const resetTint = useTintStore(state => state.reset)

  const handleResetTint = useCallback(() => resetTint(), [resetTint])

  return <ButtonReset tooltipContent='Reset Tint' onClick={handleResetTint} />
}
