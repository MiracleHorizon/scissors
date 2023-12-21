'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@widgets/SettingsPanel/OptionSwitch'
import { useResizeStore } from '@stores/resize'

export function SwitchWithoutEnlargement() {
  const withoutEnlargement = useResizeStore(state => state?.withoutEnlargement)
  const toggleEnlargement = useResizeStore(state => state.toggleEnlargement)

  const handleToggleWithoutEnlargement = useCallback(() => toggleEnlargement(), [toggleEnlargement])

  return (
    <OptionSwitch
      checked={withoutEnlargement}
      title='Without enlarging'
      onClick={handleToggleWithoutEnlargement}
    />
  )
}
