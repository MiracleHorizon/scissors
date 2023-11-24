'use client'

import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useTintStore } from '@stores/tint'

export function ButtonAddTint() {
  const addTint = useTintStore(state => state.add)

  const handleAddTint = useCallback(() => addTint(), [addTint])

  return <ButtonAddOption title='Add tint' onClick={handleAddTint} />
}
