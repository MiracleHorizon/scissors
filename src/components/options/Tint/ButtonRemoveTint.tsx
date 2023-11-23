'use client'

import { useCallback } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useTintStore } from '@stores/tint'

export function ButtonRemoveTint() {
  const removeTint = useTintStore(state => state.remove)

  const handleRemoveTint = useCallback(() => removeTint(), [removeTint])

  return (
    <Tooltip content='Remove tint'>
      <ButtonDelete onClick={handleRemoveTint} />
    </Tooltip>
  )
}
