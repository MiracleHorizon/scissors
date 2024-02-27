import { useCallback } from 'react'

import { OptionCheckbox } from '@components/OptionCheckbox'
import { useResizeStore } from '@stores/resize'

export function CheckboxEnlargement() {
  const withoutEnlargement = useResizeStore(state => state.withoutEnlargement)
  const toggleEnlargement = useResizeStore(state => state.toggleEnlargement)

  const handleToggleWithoutEnlargement = useCallback(() => toggleEnlargement(), [toggleEnlargement])

  return (
    <OptionCheckbox
      title='Without Enlarging'
      checked={withoutEnlargement}
      onClick={handleToggleWithoutEnlargement}
    />
  )
}
