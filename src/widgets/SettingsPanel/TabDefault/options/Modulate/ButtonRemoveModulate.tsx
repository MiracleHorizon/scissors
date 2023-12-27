'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@widgets/SettingsPanel/ButtonRemoveOption'
import { useModulateStore } from '@stores/modulate'

export function ButtonRemoveModulate() {
  const removeModulate = useModulateStore(state => state.remove)

  const handleRemoveModulate = useCallback(() => removeModulate(), [removeModulate])

  return <ButtonRemoveOption tooltipContent='Remove modulate' onClick={handleRemoveModulate} />
}
