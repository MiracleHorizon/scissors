import { useCallback } from 'react'
import { Button } from '@radix-ui/themes'

import { useResizeStore } from '@stores/resize'
import { themeColor } from '@shared/theme'

export function ButtonAddResize() {
  const addResize = useResizeStore(state => state.add)

  const handleAddResize = useCallback(() => addResize(), [addResize])

  return (
    <Button size='2' color={themeColor} onClick={handleAddResize}>
      Add resize
    </Button>
  )
}
