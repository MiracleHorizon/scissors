'use client'

import { useCallback } from 'react'
import { Button, Tooltip } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'

export function ButtonAddGamma() {
  const addGamma = useConvertStore(state => state.addGamma)

  const handleAddGamma = useCallback(() => addGamma(), [addGamma])

  return (
    <Tooltip content='Add gamma'>
      <Button onClick={handleAddGamma}>Add gamma</Button>
    </Tooltip>
  )
}
