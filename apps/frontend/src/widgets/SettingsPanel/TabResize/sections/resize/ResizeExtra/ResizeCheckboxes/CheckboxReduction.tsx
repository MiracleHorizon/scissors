import { useCallback } from 'react'

import { Checkbox } from '@design-system/Checkbox'
import { useResizeStore } from '@stores/resize'

export const CheckboxReduction = () => {
  const withoutReduction = useResizeStore(state => state.withoutReduction)
  const toggleReduction = useResizeStore(state => state.toggleReduction)

  const handleToggleWithoutReduction = useCallback(() => toggleReduction(), [toggleReduction])

  return (
    <Checkbox
      label='Without Reduction'
      checked={withoutReduction}
      data-cy='cbox-resize-reduction'
      onClick={handleToggleWithoutReduction}
    />
  )
}
