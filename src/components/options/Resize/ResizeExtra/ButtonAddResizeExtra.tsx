'use client'

import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useResizeStore } from '@stores/resize'

export function ButtonAddResizeExtra() {
  const addResizeExtra = useResizeStore(state => state.addExtra)

  const handleAddResizeExtra = useCallback(() => addResizeExtra(), [addResizeExtra])

  return <ButtonAddOption mr='auto' title='Add resize extra' onClick={handleAddResizeExtra} />
}
