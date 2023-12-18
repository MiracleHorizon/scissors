'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useNormaliseStore } from '@stores/normalise'

export function ButtonRemoveNormalise() {
  const removeNormalise = useNormaliseStore(state => state.remove)

  const handleRemoveNormalise = useCallback(() => removeNormalise(), [removeNormalise])

  return <ButtonRemoveOption tooltipTitle='Remove normalise' onClick={handleRemoveNormalise} />
}
