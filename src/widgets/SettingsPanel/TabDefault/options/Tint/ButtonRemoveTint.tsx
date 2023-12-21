'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@widgets/SettingsPanel/ButtonRemoveOption'
import { useTintStore } from '@stores/tint'

export function ButtonRemoveTint() {
  const removeTint = useTintStore(state => state.remove)

  const handleRemoveTint = useCallback(() => removeTint(), [removeTint])

  return <ButtonRemoveOption tooltipTitle='Remove tint' onClick={handleRemoveTint} />
}
