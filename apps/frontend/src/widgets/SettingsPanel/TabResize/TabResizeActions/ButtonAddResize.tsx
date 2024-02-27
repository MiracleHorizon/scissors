import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { DimensionsIcon } from '@ui/icons/DimensionsIcon'
import { useTabResizeStore } from '@stores/tab-resize'

export function ButtonAddResize() {
  const isAdded = useTabResizeStore(state => state.isResizeAdded())
  const addResizeSection = useTabResizeStore(state => state.addResizeSection)

  const handleAddResizeSection = () => addResizeSection()

  if (isAdded) {
    return null
  }

  return (
    <ButtonAddOption
      label='Add Resize'
      leadIcon={<DimensionsIcon width='18px' height='18px' label='add resize section' />}
      onClick={handleAddResizeSection}
    />
  )
}
