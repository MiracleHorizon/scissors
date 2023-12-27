'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@widgets/SettingsPanel/ButtonRemoveOption'
import { useNormaliseStore } from '@stores/normalise'

export function ButtonRemoveNormalise() {
  const removeNormalise = useNormaliseStore(state => state.remove)

  const handleRemoveNormalise = useCallback(() => removeNormalise(), [removeNormalise])

  return <ButtonRemoveOption tooltipContent='Remove normalise' onClick={handleRemoveNormalise} />
}
