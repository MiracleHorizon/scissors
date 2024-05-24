import { useCallback } from 'react'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useBlurStore } from '@stores/blur'

export const ButtonRemoveBlurSigma=(props: Props) =>{
  const remove = useBlurStore(state => state.removeSigma)
  const handleRemove = useCallback(() => remove(), [remove])

  return <ButtonDelete {...props} tooltipContent='Remove Blur Sigma' onClick={handleRemove} />
}

interface Props {
  disabled: boolean
}
