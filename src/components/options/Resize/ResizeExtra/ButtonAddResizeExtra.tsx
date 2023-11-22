'use client'

import { useCallback } from 'react'
import { Button } from '@radix-ui/themes'

import { useResizeStore } from '@stores/resize'
import { themeColor } from '@shared/theme'

export function ButtonAddResizeExtra() {
  const addResizeExtra = useResizeStore(state => state.addExtra)

  const handleAddResizeExtra = useCallback(() => addResizeExtra(), [addResizeExtra])

  return (
    <Button mr='auto' size='2' color={themeColor} onClick={handleAddResizeExtra}>
      Add resize extra
    </Button>
  )
}
