import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useModulateStore } from '@stores/modulate'

export function ButtonRemoveModulate() {
  const removeModulate = useModulateStore(state => state.remove)

  const handleRemoveModulate = useCallback(() => removeModulate(), [removeModulate])

  return <ButtonRemoveOption tooltipTitle='Remove modulate' onClick={handleRemoveModulate} />
}
