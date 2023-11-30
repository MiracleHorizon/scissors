'use client'

import { useCallback } from 'react'

import { ButtonReset } from '@components/ButtonReset'
import { useModulateStore } from '@stores/modulate'

export function ButtonResetModulate() {
  const resetModulate = useModulateStore(state => state.reset)

  const handleResetModulate = useCallback(() => resetModulate(), [resetModulate])

  return <ButtonReset tooltipTitle='Reset modulate' onClick={handleResetModulate} />
}
