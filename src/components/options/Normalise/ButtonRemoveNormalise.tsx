'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveNormalise() {
  const removeNormalise = useConvertStore(state => state.removeNormalise)

  const handleRemoveNormalise = useCallback(() => removeNormalise(), [removeNormalise])

  return <ButtonRemoveOption tooltipTitle='Remove normalise' onClick={handleRemoveNormalise} />
}
