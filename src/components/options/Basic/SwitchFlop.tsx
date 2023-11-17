'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@components/OptionSwitch'
import { useConvertStore } from '@stores/convert'

export function SwitchFlop() {
  const flop = useConvertStore(state => state.flop)
  const toggleFlop = useConvertStore(state => state.toggleFlop)

  const handleToggleFlop = useCallback(() => toggleFlop(), [toggleFlop])

  return <OptionSwitch title='Flop' checked={flop} onClick={handleToggleFlop} />
}
