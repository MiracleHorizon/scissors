import { useCallback } from 'react'

import { ShadowIcon } from '@ui/icons/ShadowIcon'
import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useGammaStore } from '@stores/gamma'

export function ButtonAddGamma() {
  const addGamma = useGammaStore(state => state.add)

  const handleAddGamma = useCallback(() => addGamma(), [addGamma])

  return (
    <ButtonAddOption
      label='Add Gamma'
      leadIcon={<ShadowIcon width='18px' height='18px' label='add gamma' />}
      onClick={handleAddGamma}
    />
  )
}
