import { useCallback } from 'react'

import { OptionSwitch } from '@components/OptionSwitch'
import { usePNGFormatStore } from '../store/usePNGFormatStore'

export function SwitchProgressive() {
  const progressive = usePNGFormatStore(state => state.progressive)
  const toggleProgressive = usePNGFormatStore(state => state.toggleProgressive)

  const handleSwitchProgressive = useCallback(() => toggleProgressive(), [toggleProgressive])

  return (
    <OptionSwitch title='Progressive' checked={progressive} onClick={handleSwitchProgressive} />
  )
}
