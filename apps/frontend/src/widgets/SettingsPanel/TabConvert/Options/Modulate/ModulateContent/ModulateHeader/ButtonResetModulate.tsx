import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useModulateStore } from '@stores/modulate'

export const ButtonResetModulate = () => {
  const resetModulate = useModulateStore(state => state.reset)

  const handleResetModulate = useCallback(() => resetModulate(), [resetModulate])

  return <ButtonReset tooltipContent='Reset Modulation' onClick={handleResetModulate} />
}
