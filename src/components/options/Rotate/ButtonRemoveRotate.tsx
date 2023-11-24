'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@components/ButtonRemoveOption'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveRotate() {
  const removeRotate = useConvertStore(state => state.removeRotate)

  const handleRemoveRotate = useCallback(() => removeRotate(), [removeRotate])

  return <ButtonRemoveOption tooltipTitle='Remove rotate' onClick={handleRemoveRotate} />
}
