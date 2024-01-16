import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { MoveIcon } from '@ui/icons/MoveIcon'
import { useTabResizeStore } from '@stores/tab-resize'

export function ButtonAddExtend() {
  const isAdded = useTabResizeStore(state => state.isExtendAdded())
  const addExtendSection = useTabResizeStore(state => state.addExtendSection)

  const handleAddExtendSection = () => addExtendSection()

  if (isAdded) {
    return null
  }

  return (
    <ButtonAddOption
      label='Add Extend'
      leadIcon={<MoveIcon width='18px' height='18px' label='add extend section' />}
      onClick={handleAddExtendSection}
    />
  )
}
