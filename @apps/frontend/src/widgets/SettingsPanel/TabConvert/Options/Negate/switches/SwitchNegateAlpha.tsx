import { useCallback } from 'react'

import { Switch } from '@lib/ui/Switch'
import { useNegateStore } from '@stores/negate'

export const SwitchNegateAlpha = () => {
  const negate = useNegateStore(state => state.value)
  const alpha = useNegateStore(state => state.alpha)

  const toggleAlpha = useNegateStore(state => state.toggleAlpha)
  const handleToggleAlpha = useCallback(() => toggleAlpha(), [toggleAlpha])

  return (
    <Switch label='Negate alpha' disabled={!negate} checked={alpha} onClick={handleToggleAlpha} />
  )
}
