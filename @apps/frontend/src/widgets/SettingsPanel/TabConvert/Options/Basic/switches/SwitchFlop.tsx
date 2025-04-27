import { useCallback } from 'react'

import { Switch } from '@lib/ui/Switch'
import { useConvertStore } from '@stores/convert'

export const SwitchFlop = () => {
  const flop = useConvertStore(state => state.flop)
  const toggleFlop = useConvertStore(state => state.toggleFlop)

  const handleToggleFlop = useCallback(() => toggleFlop(), [toggleFlop])

  return <Switch label='Flop' checked={flop} onClick={handleToggleFlop} />
}
