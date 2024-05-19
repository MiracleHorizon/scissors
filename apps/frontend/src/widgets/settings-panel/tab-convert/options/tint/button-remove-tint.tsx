import { useCallback } from 'react'

import { ButtonDelete } from '@ui/button-delete'
import { useTintStore } from '@stores/tint'

export function ButtonRemoveTint() {
  const removeTint = useTintStore(state => state.remove)

  const handleRemoveTint = useCallback(() => removeTint(), [removeTint])

  return <ButtonDelete tooltipContent='Remove Tint' onClick={handleRemoveTint} />
}
