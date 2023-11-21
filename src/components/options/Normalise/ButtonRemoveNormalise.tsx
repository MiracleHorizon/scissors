'use client'

import { useCallback } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveNormalise() {
  const removeNormalise = useConvertStore(state => state.removeNormalise)

  const handleRemoveNormalise = useCallback(() => removeNormalise(), [removeNormalise])

  return (
    <Tooltip content='Remove normalise'>
      <ButtonDelete onClick={handleRemoveNormalise} />
    </Tooltip>
  )
}
