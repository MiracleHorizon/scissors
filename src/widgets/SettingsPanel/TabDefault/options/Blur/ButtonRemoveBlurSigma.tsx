'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@widgets/SettingsPanel/ButtonRemoveOption'
import { useBlurStore } from '@stores/blur'

export function ButtonRemoveBlurSigma({ disabled }: Props) {
  const removeSigma = useBlurStore(state => state.removeSigma)

  const handleRemoveSigma = useCallback(() => removeSigma(), [removeSigma])

  return (
    <ButtonRemoveOption
      disabled={disabled}
      tooltipTitle='Remove blur sigma'
      onClick={handleRemoveSigma}
    />
  )
}

interface Props {
  disabled: boolean
}
