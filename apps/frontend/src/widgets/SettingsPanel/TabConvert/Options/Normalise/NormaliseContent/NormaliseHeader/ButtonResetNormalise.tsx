import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useNormaliseStore } from '@stores/normalise'

export const ButtonResetNormalise = () => {
  const resetNormalise = useNormaliseStore(state => state.reset)

  const handleResetNormalise = useCallback(() => resetNormalise(), [resetNormalise])

  return <ButtonReset tooltipContent='Reset Normalisation' onClick={handleResetNormalise} />
}
