'use client'

import { useCallback } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveRotate() {
  const removeRotate = useConvertStore(state => state.removeRotate)

  const handleRemoveRotate = useCallback(() => removeRotate(), [removeRotate])

  return (
    <Tooltip content='Remove rotate'>
      <ButtonDelete onClick={handleRemoveRotate} />
    </Tooltip>
  )
}
