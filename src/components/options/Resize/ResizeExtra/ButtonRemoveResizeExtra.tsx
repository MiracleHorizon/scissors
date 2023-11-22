'use client'

import { useCallback } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useResizeStore } from '@stores/resize'

export function ButtonRemoveResizeExtra() {
  const removeResizeExtra = useResizeStore(state => state.removeExtra)

  const handleRemoveResizeExtra = useCallback(() => removeResizeExtra(), [removeResizeExtra])

  return (
    <Tooltip content='Remove resize extra'>
      <ButtonDelete onClick={handleRemoveResizeExtra} />
    </Tooltip>
  )
}
