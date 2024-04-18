import { Checkbox } from '@design-system/checkbox'
import { useTrimStore } from '@stores/trim'

export function CheckboxTrimLineArt() {
  const lineArt = useTrimStore(state => state.lineArt)
  const toggleLineArt = useTrimStore(state => state.toggleLineArt)
  const handleToggleLineArt = () => toggleLineArt()

  return <Checkbox label='Line Art' onClick={handleToggleLineArt} checked={lineArt} />
}
