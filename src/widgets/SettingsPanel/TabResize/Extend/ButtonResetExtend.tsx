'use client'

import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useExtendStore } from '@stores/extend'

export function ButtonResetExtend() {
  const resetExtend = useExtendStore(state => state.reset)

  const handleResetExtend = useCallback(() => resetExtend(), [resetExtend])

  return (
    <ButtonReset tooltipTitle='Reset Extending' variant='outline' onClick={handleResetExtend} />
  )
}
