import { useCallback } from 'react'
import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { OptionCheckbox } from '@components/OptionCheckbox'
import { useResizeStore } from '@stores/resize'
import { useOutputStore } from '@stores/output'

const ALLOWED_FORMATS_FOR_FAST_SHRINK: string[] = [IMAGE_FILE_FORMAT.JPEG, IMAGE_FILE_FORMAT.WEBP]

// TODO: Remove output format rel; check current file format
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
