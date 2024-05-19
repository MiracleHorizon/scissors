import { useCallback } from 'react'

import { ButtonReset } from '@ui/button-reset'
import { useTrimStore } from '@stores/trim'

export function ButtonResetTrim() {
  const resetTrim = useTrimStore(state => state.reset)

  const handleResetTrim = useCallback(() => resetTrim(), [resetTrim])

  return (
    <ButtonReset
      tooltipContent='Reset Trim'
      variant='outline'
      radius='large'
      onClick={handleResetTrim}
    />
  )
}
