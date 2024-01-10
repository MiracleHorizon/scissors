'use client'

import { useCallback } from 'react'

import { Half2Icon } from '@ui/icons/Half2Icon'
import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useTintStore } from '@stores/tint'

export function ButtonAddTint() {
  const addTint = useTintStore(state => state.add)

  const handleAddTint = useCallback(() => addTint(), [addTint])

  return (
    <ButtonAddOption
      label='Add Tint'
      leadIcon={<Half2Icon width='18px' height='18px' />}
      onClick={handleAddTint}
    />
  )
}
