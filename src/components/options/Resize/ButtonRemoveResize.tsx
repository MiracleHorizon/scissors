import { useCallback } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useResizeStore } from '@stores/resize'

export function ButtonRemoveResize() {
  const removeResize = useResizeStore(state => state.remove)

  const handleRemoveResize = useCallback(() => removeResize(), [removeResize])

  return (
    <Tooltip content='Remove resize'>
      <ButtonDelete onClick={handleRemoveResize} />
    </Tooltip>
  )
}
