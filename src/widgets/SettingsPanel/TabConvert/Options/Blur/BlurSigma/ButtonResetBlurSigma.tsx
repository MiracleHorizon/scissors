import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useBlurStore } from '@stores/blur'

export function ButtonResetBlurSigma(props: Props) {
  const reset = useBlurStore(state => state.removeSigma)
  const handleReset = useCallback(() => reset(), [reset])

  return <ButtonReset {...props} tooltipContent='Reset Blur Sigma' onClick={handleReset} />
}

interface Props {
  disabled: boolean
}
