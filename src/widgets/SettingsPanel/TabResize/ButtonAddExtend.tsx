import { ButtonAddOption } from '../ButtonAddOption'
import { MoveIcon } from '@ui/icons/MoveIcon'
import { useTabResizeStore } from '@stores/tab-resize'

export function ButtonAddExtend() {
  const isAdded = useTabResizeStore(state => state.isExtendAdded())
  const addExtendItem = useTabResizeStore(state => state.addExtendItem)

  const handleAddExtendItem = () => addExtendItem()

  if (isAdded) {
    return null
  }

  return (
    <ButtonAddOption
      label='Add Extend'
      leadIcon={<MoveIcon width='18px' height='18px' />}
      onClick={handleAddExtendItem}
    />
  )
}
