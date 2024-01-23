import { useCallback } from 'react'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useBlurStore } from '@stores/blur'

export function ButtonRemoveBlurSigma(props: Props) {
  const removeSigma = useBlurStore(state => state.removeSigma)

  const handleRemoveSigma = useCallback(() => removeSigma(), [removeSigma])

  return <ButtonDelete {...props} tooltipContent='Remove Blur Sigma' onClick={handleRemoveSigma} />
}

interface Props {
  disabled: boolean
}
