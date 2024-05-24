import { Checkbox } from '@design-system/Checkbox'
import { useTrimStore } from '@stores/trim'

export const CheckboxTrimLineArt = () => {
  const lineArt = useTrimStore(state => state.lineArt)
  const toggleLineArt = useTrimStore(state => state.toggleLineArt)
  const handleToggleLineArt = () => toggleLineArt()

  return <Checkbox label='Line Art' onClick={handleToggleLineArt} checked={lineArt} />
}
