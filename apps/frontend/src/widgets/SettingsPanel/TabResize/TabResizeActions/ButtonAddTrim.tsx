import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { ScissorsIcon } from '@ui/icons/ScissorsIcon'
import { useTabResizeStore } from '../store'

export function ButtonAddTrim() {
  const isAdded = useTabResizeStore(state => state.isTrimAdded())
  const addTrimSection = useTabResizeStore(state => state.addTrimSection)

  const handleAddTrimSection = () => addTrimSection()

  if (isAdded) {
    return null
  }

  return (
    <ButtonAddOption
      label='Add Trim'
      leadIcon={<ScissorsIcon width='18px' height='18px' label='add trim section' />}
      onClick={handleAddTrimSection}
    />
  )
}
