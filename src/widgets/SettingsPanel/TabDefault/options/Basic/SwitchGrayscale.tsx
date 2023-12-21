'use client'

import { useCallback } from 'react'

import { OptionSwitch } from '@widgets/SettingsPanel/OptionSwitch'
import { useConvertStore } from '@stores/convert'

export function SwitchGrayscale() {
  const grayscale = useConvertStore(state => state.grayscale)
  const toggleGrayscale = useConvertStore(state => state.toggleGrayscale)

  const handleToggleGrayscale = useCallback(() => toggleGrayscale(), [toggleGrayscale])

  return <OptionSwitch title='Grayscale' checked={grayscale} onClick={handleToggleGrayscale} />
}
