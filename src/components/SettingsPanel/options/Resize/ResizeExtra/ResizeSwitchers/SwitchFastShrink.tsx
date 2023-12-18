'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@components/OptionSwitch'
import { useResizeStore } from '@stores/resize'

export function SwitchFastShrink() {
  const fastShrink = useResizeStore(state => state.extra?.fastShrinkOnLoad)
  const toggleFastShrink = useResizeStore(state => state.toggleFastShrink)

  const handleToggleFastShrink = useCallback(() => toggleFastShrink(), [toggleFastShrink])

  return <OptionSwitch checked={fastShrink} title='Fast shrink' onClick={handleToggleFastShrink} />
}
