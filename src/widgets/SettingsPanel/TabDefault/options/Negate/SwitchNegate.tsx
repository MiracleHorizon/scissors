'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@widgets/SettingsPanel/OptionSwitch'
import { useNegateStore } from '@stores/negate'

export function SwitchNegate() {
  const negate = useNegateStore(state => state.value)
  const toggle = useNegateStore(state => state.toggleValue)

  const handleToggle = useCallback(() => toggle(), [toggle])

  return <OptionSwitch title='Negate' checked={negate} onClick={handleToggle} />
}
