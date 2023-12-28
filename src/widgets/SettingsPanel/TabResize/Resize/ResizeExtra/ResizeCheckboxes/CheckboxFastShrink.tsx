'use client'

import { useCallback } from 'react'

import { OptionCheckbox } from '@components/OptionCheckbox'
import { useResizeStore } from '@stores/resize'
import { useOutputStore } from '@stores/output'
import { ImageFileFormat } from '@server/Sharp'

const ALLOWED_FORMATS_FOR_FAST_SHRINK = [ImageFileFormat.JPEG, ImageFileFormat.WEBP]

export function CheckboxFastShrink() {
  const outputFormat = useOutputStore(state => state.outputFormat)
  const fastShrink = useResizeStore(state => state.fastShrinkOnLoad)
  const toggleFastShrink = useResizeStore(state => state.toggleFastShrink)

  const handleToggleFastShrink = useCallback(() => toggleFastShrink(), [toggleFastShrink])

  if (!outputFormat || !ALLOWED_FORMATS_FOR_FAST_SHRINK.includes(outputFormat)) {
    return null
  }

  return (
    <OptionCheckbox title='Fast Shrink' checked={fastShrink} onClick={handleToggleFastShrink} />
  )
}
