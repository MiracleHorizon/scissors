'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@components/OptionSwitch'
import { useConvertStore } from '@stores/convert'

export function SwitchNegate() {
  const negate = useConvertStore(state => state.negate?.value)
  const toggleNegate = useConvertStore(state => state.toggleNegate)

  const handleToggleNegate = useCallback(() => toggleNegate(), [toggleNegate])

  return <OptionSwitch title='Negate' checked={negate} onClick={handleToggleNegate} />
}
