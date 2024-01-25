import { useCallback } from 'react'

import { Half2Icon } from '@ui/icons/Half2Icon'
import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useTintStore } from '@stores/tint'
import { useConvertStore } from '@stores/convert'

export function ButtonAddTint() {
  const isGrayscaleEnabled = useConvertStore(state => state.grayscale)

  const addTint = useTintStore(state => state.add)
  const handleAddTint = useCallback(() => addTint(), [addTint])

  return (
    <ButtonAddOption
      label='Add Tint'
      leadIcon={<Half2Icon width='18px' height='18px' label='add tint' />}
      disabled={isGrayscaleEnabled}
      onClick={handleAddTint}
    />
  )
}
