import { useCallback } from 'react'
import { Button } from '@radix-ui/themes'

import { useResizeStore } from '@stores/resize'

export function ButtonAddResize() {
  const addResize = useResizeStore(state => state.add)

  const handleAddResize = useCallback(() => addResize(), [addResize])

  return (
    <Button size='2' onClick={handleAddResize}>
      Add resize
    </Button>
  )
}
