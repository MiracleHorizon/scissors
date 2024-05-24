import { Checkbox } from '@design-system/Checkbox'
import { useOutputStore } from '@stores/output'

export const CheckboxKeepChanges = () => {
  const checked = useOutputStore(state => state.keepChanges)
  const toggleKeepChanges = useOutputStore(state => state.toggleKeepChanges)

  const handleToggle = () => toggleKeepChanges()

  return (
    <Checkbox
      label='Keep Changes'
      direction='row-reverse'
      justify='between'
      checked={checked}
      onClick={handleToggle}
    />
  )
}
