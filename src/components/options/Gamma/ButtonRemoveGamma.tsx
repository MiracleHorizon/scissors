'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveGamma() {
  const removeGamma = useConvertStore(state => state.removeGamma)

  const handleRemoveGamma = useCallback(() => removeGamma(), [removeGamma])

  return <ButtonRemoveOption tooltipTitle='Remove gamma' onClick={handleRemoveGamma} />
}
