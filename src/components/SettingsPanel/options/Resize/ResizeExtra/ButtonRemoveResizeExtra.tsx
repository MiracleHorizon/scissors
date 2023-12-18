'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useResizeStore } from '@stores/resize'

export function ButtonRemoveResizeExtra() {
  const removeResizeExtra = useResizeStore(state => state.removeExtra)

  const handleRemoveResizeExtra = useCallback(() => removeResizeExtra(), [removeResizeExtra])

  return <ButtonRemoveOption tooltipTitle='Remove resize extra' onClick={handleRemoveResizeExtra} />
}
