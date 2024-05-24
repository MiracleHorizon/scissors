import { useCallback } from 'react'

import { Switch } from '@design-system/Switch'
import { useConvertStore } from '@stores/convert'

export const SwitchGrayscale = () => {
  const grayscale = useConvertStore(state => state.grayscale)
  const toggleGrayscale = useConvertStore(state => state.toggleGrayscale)

  const handleToggleGrayscale = useCallback(() => toggleGrayscale(), [toggleGrayscale])

  return <Switch title='Grayscale' checked={grayscale} onClick={handleToggleGrayscale} />
}
