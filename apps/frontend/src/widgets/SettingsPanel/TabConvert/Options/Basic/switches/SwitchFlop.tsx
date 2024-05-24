import { useCallback } from 'react'

import { Switch } from '@design-system/Switch'
import { useConvertStore } from '@stores/convert'

export function SwitchFlop() {
  const flop = useConvertStore(state => state.flop)
  const toggleFlop = useConvertStore(state => state.toggleFlop)

  const handleToggleFlop = useCallback(() => toggleFlop(), [toggleFlop])

  return <Switch title='Flop' checked={flop} onClick={handleToggleFlop} />
}
