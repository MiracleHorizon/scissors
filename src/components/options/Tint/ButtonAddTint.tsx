'use client'

import { useCallback } from 'react'
import { Button, Tooltip } from '@radix-ui/themes'

import { useTintStore } from '@stores/tint'

export function ButtonAddTint() {
  const addTint = useTintStore(state => state.add)

  const handleAddTint = useCallback(() => addTint(), [addTint])

  return (
    <Tooltip content='Add tint'>
      <Button onClick={handleAddTint}>Add tint</Button>
    </Tooltip>
  )
}
