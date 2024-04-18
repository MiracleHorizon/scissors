import { useCallback } from 'react'

import { Switch } from '@design-system/switch'
import { useNegateStore } from '@stores/negate'

export function SwitchNegateAlpha() {
  const negate = useNegateStore(state => state.value)
  const alpha = useNegateStore(state => state.alpha)

  const toggleAlpha = useNegateStore(state => state.toggleAlpha)
  const handleToggleAlpha = useCallback(() => toggleAlpha(), [toggleAlpha])

  return (
    <Switch title='Negate alpha' disabled={!negate} checked={alpha} onClick={handleToggleAlpha} />
  )
}
