import { useCallback } from 'react'

import { TokensIcon } from '@ui/icons/TokensIcon'
import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useModulateStore } from '@stores/modulate'

export function ButtonAddModulate() {
  const addModulate = useModulateStore(state => state.add)

  const handleAddModulate = useCallback(() => addModulate(), [addModulate])

  return (
    <ButtonAddOption
      label='Add Modulation'
      leadIcon={<TokensIcon width='18px' height='18px' label='add modulation' />}
      onClick={handleAddModulate}
    />
  )
}
