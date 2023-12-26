'use client'

import { useCallback } from 'react'

import { OptionCheckbox } from '@widgets/SettingsPanel/OptionCheckbox'
import { useResizeStore } from '@stores/resize'

export function CheckboxReduction() {
  const withoutReduction = useResizeStore(state => state.withoutReduction)
  const toggleReduction = useResizeStore(state => state.toggleReduction)

  const handleToggleWithoutReduction = useCallback(() => toggleReduction(), [toggleReduction])

  return (
    <OptionCheckbox
      title='Without Reduction'
      checked={withoutReduction}
      onClick={handleToggleWithoutReduction}
    />
  )
}
