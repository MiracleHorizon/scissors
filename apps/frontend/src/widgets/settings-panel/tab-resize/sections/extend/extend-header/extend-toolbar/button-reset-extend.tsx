import { useCallback } from 'react'

import { ButtonReset } from '@ui/button-reset'
import { useExtendStore } from '@stores/extend'

export function ButtonResetExtend() {
  const resetExtend = useExtendStore(state => state.reset)

  const handleResetExtend = useCallback(() => resetExtend(), [resetExtend])

  return (
    <ButtonReset
      variant='outline'
      radius='large'
      tooltipContent='Reset Extending'
      onClick={handleResetExtend}
    />
  )
}
