import { useCallback } from 'react'

import { OptionSwitch } from '@components/OptionSwitch'
import { usePNGFormatStore } from '../store/usePNGFormatStore'

export function SwitchAdaptiveFiltering() {
  const adaptiveFiltering = usePNGFormatStore(state => state.adaptiveFiltering)
  const toggleAdaptiveFiltering = usePNGFormatStore(state => state.toggleAdaptiveFiltering)

  const handleToggleAdaptiveFiltering = useCallback(
    () => toggleAdaptiveFiltering(),
    [toggleAdaptiveFiltering]
  )

  return (
    <OptionSwitch
      title='Adaptive Filtering'
      checked={adaptiveFiltering}
      onClick={handleToggleAdaptiveFiltering}
    />
  )
}
