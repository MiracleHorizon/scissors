import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useTrimStore } from '@stores/trim'

export function ButtonTrimReset() {
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
