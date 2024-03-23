import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { CropIcon } from '@ui/icons/CropIcon'
import { useTabResizeStore } from '../store'

export function ButtonAddExtract() {
  const isAdded = useTabResizeStore(state => state.isExtractAdded())
  const addExtractSection = useTabResizeStore(state => state.addExtractSection)

  const handleAddExtractSection = () => addExtractSection()

  if (isAdded) {
    return null
  }

  return (
    <ButtonAddOption
      label='Add Extract'
      leadIcon={<CropIcon width='18px' height='18px' label='add extract section' />}
      onClick={handleAddExtractSection}
    />
  )
}
