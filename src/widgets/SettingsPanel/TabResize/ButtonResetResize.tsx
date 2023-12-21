import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useResizeStore } from '@stores/resize'

export function ButtonResetResize() {
  const resetResize = useResizeStore(state => state.reset)

  const handleResetResize = useCallback(() => resetResize(), [resetResize])

  return <ButtonReset tooltipTitle='Reset resize' variant='outline' onClick={handleResetResize} />
}
