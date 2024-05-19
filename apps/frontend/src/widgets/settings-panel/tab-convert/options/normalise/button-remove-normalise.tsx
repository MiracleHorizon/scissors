import { useCallback } from 'react'

import { ButtonDelete } from '@ui/button-delete'
import { useNormaliseStore } from '@stores/normalise'

export function ButtonRemoveNormalise() {
  const removeNormalise = useNormaliseStore(state => state.remove)

  const handleRemoveNormalise = useCallback(() => removeNormalise(), [removeNormalise])

  return <ButtonDelete tooltipContent='Remove Normalisation' onClick={handleRemoveNormalise} />
}
