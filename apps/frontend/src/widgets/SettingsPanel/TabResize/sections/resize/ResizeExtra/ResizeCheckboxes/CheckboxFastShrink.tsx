import { useCallback } from 'react'

import { IMAGE_FILE_FORMAT } from '@scissors/sharp'

import { Checkbox } from '@design-system/Checkbox'
import { useResizeStore } from '@stores/resize'
import { useOutputStore } from '@stores/output'
import { cropImageFileType } from '@helpers/file/cropImageFileType'

const ALLOWED_FILE_TYPES: string[] = [IMAGE_FILE_FORMAT.JPEG, IMAGE_FILE_FORMAT.WEBP] as const

export const CheckboxFastShrink = () => {
  const file = useOutputStore(state => state.file)
  const fastShrink = useResizeStore(state => state.fastShrinkOnLoad)
  const toggleFastShrink = useResizeStore(state => state.toggleFastShrink)

  const handleToggleFastShrink = useCallback(() => toggleFastShrink(), [toggleFastShrink])

  if (!file) {
    return null
  }

  const fileType = cropImageFileType(file.type)
  const isAllowedFileType = ALLOWED_FILE_TYPES.includes(fileType)
  if (!isAllowedFileType) {
    return null
  }

  return <Checkbox label='Fast Shrink' checked={fastShrink} onClick={handleToggleFastShrink} />
}
