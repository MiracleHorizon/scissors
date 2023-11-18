'use client'

import { useCallback } from 'react'
import { Button, Tooltip } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'
import { themeColor } from '@shared/theme'

export function ButtonAddRotate() {
  const addRotate = useConvertStore(state => state.addRotate)

  const handleAddRotate = useCallback(() => addRotate(), [addRotate])

  return (
    <Tooltip content='Add image rotation'>
      <Button color={themeColor} onClick={handleAddRotate}>
        Add rotate
      </Button>
    </Tooltip>
  )
}
