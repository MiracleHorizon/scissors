import { useCallback } from 'react'

import { Switch } from '@design-system/Switch'
import { useConvertStore } from '@stores/convert'

export const SwitchFlip = () => {
  const flip = useConvertStore(state => state.flip)
  const toggleFlip = useConvertStore(state => state.toggleFlip)

  const handleToggleFlip = useCallback(() => toggleFlip(), [toggleFlip])

  return <Switch title='Flip' checked={flip} onClick={handleToggleFlip} />
}
