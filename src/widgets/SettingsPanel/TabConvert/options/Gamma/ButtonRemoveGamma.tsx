import { useCallback } from 'react'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useGammaStore } from '@stores/gamma'

export function ButtonRemoveGamma() {
  const removeGamma = useGammaStore(state => state.remove)

  const handleRemoveGamma = useCallback(() => removeGamma(), [removeGamma])

  return <ButtonDelete tooltipContent='Remove Gamma' onClick={handleRemoveGamma} />
}
