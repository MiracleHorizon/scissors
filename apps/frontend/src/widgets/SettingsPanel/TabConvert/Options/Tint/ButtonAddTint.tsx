import { useCallback } from 'react'

import { PaintbrushIcon } from '@scissors/react-icons/PaintbrushIcon'

import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useTintStore } from '@stores/tint'
import { useConvertStore } from '@stores/convert'

export const ButtonAddTint = () => {
  const isGrayscaleEnabled = useConvertStore(state => state.grayscale)

  const addTint = useTintStore(state => state.add)
  const handleAddTint = useCallback(() => addTint(), [addTint])

  return (
    <ButtonAddOption
      label='Add Tint'
      leadIcon={<PaintbrushIcon width='18px' height='18px' label='add tint' />}
      disabled={isGrayscaleEnabled}
      data-cy='button-add-tint'
      onClick={handleAddTint}
    />
  )
}
