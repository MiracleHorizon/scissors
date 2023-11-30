import { useCallback } from 'react'
import { DimensionsIcon } from '@radix-ui/react-icons'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useResizeStore } from '@stores/resize'

export function ButtonAddResize() {
  const addResize = useResizeStore(state => state.add)

  const handleAddResize = useCallback(() => addResize(), [addResize])

  return (
    <ButtonAddOption
      title='Add resize'
      leadIcon={<DimensionsIcon width='18px' height='18px' />}
      onClick={handleAddResize}
    />
  )
}
