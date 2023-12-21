'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@widgets/SettingsPanel/ButtonRemoveOption'
import { useGammaStore } from '@stores/gamma'

export function ButtonRemoveGamma() {
  const removeGamma = useGammaStore(state => state.remove)

  const handleRemoveGamma = useCallback(() => removeGamma(), [removeGamma])

  return <ButtonRemoveOption tooltipTitle='Remove gamma' onClick={handleRemoveGamma} />
}
