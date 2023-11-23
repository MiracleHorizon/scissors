'use client'

import { useCallback } from 'react'
import { Button, Tooltip } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'

export function ButtonAddRotate() {
  const addRotate = useConvertStore(state => state.addRotate)

  const handleAddRotate = useCallback(() => addRotate(), [addRotate])

  return (
    <Tooltip content='Add image rotation'>
      <Button onClick={handleAddRotate}>Add rotate</Button>
    </Tooltip>
  )
}
