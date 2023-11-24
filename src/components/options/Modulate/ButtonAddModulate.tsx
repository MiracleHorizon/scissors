'use client'

import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useModulateStore } from '@stores/modulate'

export function ButtonAddModulate() {
  const addModulate = useModulateStore(state => state.add)

  const handleAddModulate = useCallback(() => addModulate(), [addModulate])

  return (
    <ButtonAddOption
      title='Add modulate'
      tooltipTitle='Add modulate options'
      onClick={handleAddModulate}
    />
  )
}
