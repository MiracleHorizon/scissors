'use client'

import { useCallback } from 'react'
import { Button, Tooltip } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'

export function ButtonAddNormalise() {
  const addNormalise = useConvertStore(state => state.addNormalise)

  const handleAddNormalise = useCallback(() => addNormalise(), [addNormalise])

  return (
    <Tooltip content='Add normalise'>
      <Button onClick={handleAddNormalise}>Add normalise</Button>
    </Tooltip>
  )
}
