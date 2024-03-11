import { OptionCheckbox } from '@components/OptionCheckbox'
import { useTrimStore } from '@stores/trim'

export function CheckboxTrimLineArt() {
  const lineArt = useTrimStore(state => state.lineArt)
  const toggleLineArt = useTrimStore(state => state.toggleLineArt)
  const handleToggleLineArt = () => toggleLineArt()

  return <OptionCheckbox title='Line Art' onClick={handleToggleLineArt} checked={lineArt} />
}
