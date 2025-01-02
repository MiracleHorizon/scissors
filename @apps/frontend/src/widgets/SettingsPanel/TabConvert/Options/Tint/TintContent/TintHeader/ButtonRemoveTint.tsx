import { useCallback } from 'react'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useTintStore } from '@stores/tint'

export const ButtonRemoveTint = () => {
  const removeTint = useTintStore(state => state.remove)

  const handleRemoveTint = useCallback(() => removeTint(), [removeTint])

  return <ButtonDelete tooltipContent='Remove Tint' onClick={handleRemoveTint} />
}
