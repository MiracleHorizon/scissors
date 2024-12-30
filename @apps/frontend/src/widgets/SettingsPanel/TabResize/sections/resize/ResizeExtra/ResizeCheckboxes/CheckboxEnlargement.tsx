import { useCallback } from 'react'

import { Checkbox } from '@design-system/Checkbox'
import { useResizeStore } from '@stores/resize'

export const CheckboxEnlargement = () => {
  const withoutEnlargement = useResizeStore(state => state.withoutEnlargement)
  const toggleEnlargement = useResizeStore(state => state.toggleEnlargement)

  const handleToggleWithoutEnlargement = useCallback(() => toggleEnlargement(), [toggleEnlargement])

  return (
    <Checkbox
      label='Without Enlarging'
      checked={withoutEnlargement}
      data-cy='cbox-resize-enlargement'
      onClick={handleToggleWithoutEnlargement}
    />
  )
}
