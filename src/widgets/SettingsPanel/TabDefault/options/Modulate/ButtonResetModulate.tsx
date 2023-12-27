'use client'

import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useModulateStore } from '@stores/modulate'

export function ButtonResetModulate() {
  const resetModulate = useModulateStore(state => state.reset)

  const handleResetModulate = useCallback(() => resetModulate(), [resetModulate])

  return <ButtonReset tooltipContent='Reset modulate' onClick={handleResetModulate} />
}
