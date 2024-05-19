import { useCallback } from 'react'

import { PaintbrushIcon } from '@scissors/react-icons/PaintbrushIcon'

import { ButtonAddOption } from '@widgets/settings-panel/button-add-option'
import { useTintStore } from '@stores/tint'
import { useConvertStore } from '@stores/convert'

export function ButtonAddTint() {
  const isGrayscaleEnabled = useConvertStore(state => state.grayscale)

  const addTint = useTintStore(state => state.add)
  const handleAddTint = useCallback(() => addTint(), [addTint])

  return (
    <ButtonAddOption
      label='Add Tint'
      leadIcon={<PaintbrushIcon width='18px' height='18px' label='add tint' />}
      disabled={isGrayscaleEnabled}
      onClick={handleAddTint}
    />
  )
}
