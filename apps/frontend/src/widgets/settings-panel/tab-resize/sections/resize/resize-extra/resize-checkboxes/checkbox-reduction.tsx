import { useCallback } from 'react'

import { Checkbox } from '@design-system/checkbox'
import { useResizeStore } from '@stores/resize'

export function CheckboxReduction() {
  const withoutReduction = useResizeStore(state => state.withoutReduction)
  const toggleReduction = useResizeStore(state => state.toggleReduction)

  const handleToggleWithoutReduction = useCallback(() => toggleReduction(), [toggleReduction])

  return (
    <Checkbox
      label='Without Reduction'
      checked={withoutReduction}
      onClick={handleToggleWithoutReduction}
    />
  )
}
