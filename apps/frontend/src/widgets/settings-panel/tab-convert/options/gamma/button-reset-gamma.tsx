import { useCallback } from 'react'

import { ButtonReset } from '@ui/button-reset'
import { useGammaStore } from '@stores/gamma'

export function ButtonResetGamma() {
  const resetGamma = useGammaStore(state => state.reset)

  const handleResetGamma = useCallback(() => resetGamma(), [resetGamma])

  return <ButtonReset tooltipContent='Reset Gamma' onClick={handleResetGamma} />
}
