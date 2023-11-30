'use client'

import { useCallback } from 'react'

import { ButtonReset } from '@components/ButtonReset'
import { useNormaliseStore } from '@stores/normalise'

export function ButtonResetNormalise() {
  const resetNormalise = useNormaliseStore(state => state.reset)

  const handleResetNormalise = useCallback(() => resetNormalise(), [resetNormalise])

  return <ButtonReset tooltipTitle='Reset normalise' onClick={handleResetNormalise} />
}
