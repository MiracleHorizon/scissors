'use client'

import { useCallback } from 'react'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useModulateStore } from '@stores/modulate'

export function ButtonRemoveModulate() {
  const removeModulate = useModulateStore(state => state.remove)

  const handleRemoveModulate = useCallback(() => removeModulate(), [removeModulate])

  return <ButtonDelete tooltipContent='Remove Modulation' onClick={handleRemoveModulate} />
}
