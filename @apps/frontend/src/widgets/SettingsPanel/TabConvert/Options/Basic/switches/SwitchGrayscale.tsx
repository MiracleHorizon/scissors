import { useCallback } from 'react'

import { Switch } from '@lib/ui/Switch'
import { useConvertStore } from '@stores/convert'

export const SwitchGrayscale = () => {
  const grayscale = useConvertStore(state => state.grayscale)
  const toggleGrayscale = useConvertStore(state => state.toggleGrayscale)

  const handleToggleGrayscale = useCallback(() => toggleGrayscale(), [toggleGrayscale])

  return <Switch label='Grayscale' checked={grayscale} onClick={handleToggleGrayscale} />
}
