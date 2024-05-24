import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useResizeStore } from '@stores/resize'

export const ButtonResizeReset = () => {
  const reset = useResizeStore(state => state.reset)

  const handleReset = useCallback(() => reset(), [reset])

  return (
    <ButtonReset
      tooltipContent='Reset Resizing'
      variant='outline'
      radius='large'
      onClick={handleReset}
    />
  )
}
