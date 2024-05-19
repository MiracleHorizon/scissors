import { useCallback } from 'react'

import { Checkbox } from '@design-system/checkbox'
import { useResizeStore } from '@stores/resize'

export function CheckboxEnlargement() {
  const withoutEnlargement = useResizeStore(state => state.withoutEnlargement)
  const toggleEnlargement = useResizeStore(state => state.toggleEnlargement)

  const handleToggleWithoutEnlargement = useCallback(() => toggleEnlargement(), [toggleEnlargement])

  return (
    <Checkbox
      label='Without Enlarging'
      checked={withoutEnlargement}
      onClick={handleToggleWithoutEnlargement}
    />
  )
}
