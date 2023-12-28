'use client'

import { useCallback } from 'react'
import { TokensIcon } from '@radix-ui/react-icons'

import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useModulateStore } from '@stores/modulate'

export function ButtonAddModulate() {
  const addModulate = useModulateStore(state => state.add)

  const handleAddModulate = useCallback(() => addModulate(), [addModulate])

  return (
    <ButtonAddOption
      title='Add Modulation'
      leadIcon={<TokensIcon width='18px' height='18px' />}
      onClick={handleAddModulate}
    />
  )
}
