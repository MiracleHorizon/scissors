import { useCallback } from 'react'

import { OptionSwitch } from '@components/OptionSwitch'
import { useRotateStore } from '@stores/rotate'

export function SwitchDominantBackground() {
  const withDominantBackground = useRotateStore(state => state.withDominantBackground)
  const toggleWithDominantBackground = useRotateStore(state => state.toggleWithDominantBackground)

  const handleToggleWithDominantBackground = useCallback(
    () => toggleWithDominantBackground(),
    [toggleWithDominantBackground]
  )

  return (
    <OptionSwitch
      title='Dominant Background'
      checked={withDominantBackground}
      onClick={handleToggleWithDominantBackground}
    />
  )
}
