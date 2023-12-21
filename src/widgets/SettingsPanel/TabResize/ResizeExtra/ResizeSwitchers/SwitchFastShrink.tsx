'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@widgets/SettingsPanel/OptionSwitch'
import { useResizeStore } from '@stores/resize'
import { useFormatStore } from '@stores/format'
import { ConvertFormat } from '@libs/Sharp'

const ALLOWED_FORMATS_FOR_FAST_SHRINK = [ConvertFormat.JPEG, ConvertFormat.WEBP]

export function SwitchFastShrink() {
  const format = useFormatStore(state => state.format)
  const fastShrink = useResizeStore(state => state?.fastShrinkOnLoad)
  const toggleFastShrink = useResizeStore(state => state.toggleFastShrink)

  const handleToggleFastShrink = useCallback(() => toggleFastShrink(), [toggleFastShrink])

  if (!format || !ALLOWED_FORMATS_FOR_FAST_SHRINK.includes(format)) {
    return null
  }

  return <OptionSwitch checked={fastShrink} title='Fast shrink' onClick={handleToggleFastShrink} />
}
