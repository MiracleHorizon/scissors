'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveBlurSigma({ disabled }: Props) {
  const removeBlurSigma = useConvertStore(state => state.removeBlurSigma)

  const handleRemoveBlurSigma = useCallback(() => removeBlurSigma(), [removeBlurSigma])

  return (
    <ButtonRemoveOption
      disabled={disabled}
      tooltipTitle='Remove blur sigma'
      onClick={handleRemoveBlurSigma}
    />
  )
}

interface Props {
  disabled: boolean
}
