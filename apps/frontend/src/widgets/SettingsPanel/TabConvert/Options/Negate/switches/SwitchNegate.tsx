import { useCallback } from 'react'

import { Switch } from '@design-system/Switch'
import { useNegateStore } from '@stores/negate'

export const SwitchNegate = () => {
  const negate = useNegateStore(state => state.value)

  const toggle = useNegateStore(state => state.toggleValue)
  const handleToggle = useCallback(() => toggle(), [toggle])

  return <Switch title='Negate' checked={negate} onClick={handleToggle} />
}
