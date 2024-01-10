import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useResizeStore } from '@stores/resize'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function ButtonResizeReset(props: ClassNameProps) {
  const resetResize = useResizeStore(state => state.reset)

  const handleResetResize = useCallback(() => resetResize(), [resetResize])

  return (
    <ButtonReset
      {...props}
      tooltipContent='Reset Resizing'
      variant='outline'
      radius='large'
      onClick={handleResetResize}
    />
  )
}
