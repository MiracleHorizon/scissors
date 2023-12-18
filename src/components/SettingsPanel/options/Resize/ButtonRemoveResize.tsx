import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useResizeStore } from '@stores/resize'

export function ButtonRemoveResize() {
  const removeResize = useResizeStore(state => state.remove)

  const handleRemoveResize = useCallback(() => removeResize(), [removeResize])

  return <ButtonRemoveOption tooltipTitle='Remove resize' onClick={handleRemoveResize} />
}
