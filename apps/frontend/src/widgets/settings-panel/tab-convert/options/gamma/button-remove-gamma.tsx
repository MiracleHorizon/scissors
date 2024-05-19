import { useCallback } from 'react'

import { ButtonDelete } from '@ui/button-delete'
import { useGammaStore } from '@stores/gamma'

export function ButtonRemoveGamma() {
  const removeGamma = useGammaStore(state => state.remove)

  const handleRemoveGamma = useCallback(() => removeGamma(), [removeGamma])

  return <ButtonDelete tooltipContent='Remove Gamma' onClick={handleRemoveGamma} />
}
