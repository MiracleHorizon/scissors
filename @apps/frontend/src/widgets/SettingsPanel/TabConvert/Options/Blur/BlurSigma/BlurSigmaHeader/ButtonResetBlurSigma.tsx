import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useBlurStore } from '@stores/blur'

interface Props {
  disabled: boolean
}

export const ButtonResetBlurSigma = (props: Props) => {
  const reset = useBlurStore(state => state.removeSigma)
  const handleReset = useCallback(() => reset(), [reset])

  return <ButtonReset {...props} tooltipContent='Reset Blur Sigma' onClick={handleReset} />
}
