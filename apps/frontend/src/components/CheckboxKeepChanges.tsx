import { Checkbox } from '@design-system/checkbox'
import { useOutputStore } from '@stores/output'

export const CheckboxKeepChanges = () => {
  const checked = useOutputStore(state => state.keepChanges)
  const toggleKeepChanges = useOutputStore(state => state.toggleKeepChanges)

  const handleToggle = () => toggleKeepChanges()

  return <Checkbox label='Keep Changes' checked={checked} onClick={handleToggle} />
}
