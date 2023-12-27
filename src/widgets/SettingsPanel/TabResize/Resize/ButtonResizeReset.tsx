import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useResizeStore } from '@stores/resize'

export function ButtonResizeReset() {
  const resetResize = useResizeStore(state => state.reset)

  const handleResetResize = useCallback(() => resetResize(), [resetResize])

  return (
    <ButtonReset
      tooltipContent='Reset resize'
      variant='outline'
      radius='large'
      onClick={handleResetResize}
    />
  )
}
