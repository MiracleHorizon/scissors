import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useResizeStore } from '@stores/resize'

export function ButtonAddResize() {
  const addResize = useResizeStore(state => state.add)

  const handleAddResize = useCallback(() => addResize(), [addResize])

  return <ButtonAddOption title='Add resize' onClick={handleAddResize} />
}
