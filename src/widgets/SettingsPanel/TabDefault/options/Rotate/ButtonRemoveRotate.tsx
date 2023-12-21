'use client'

import { useCallback } from 'react'

import { ButtonRemoveOption } from '@widgets/SettingsPanel/ButtonRemoveOption'
import { useRotateStore } from '@stores/rotate'

export function ButtonRemoveRotate() {
  const removeRotate = useRotateStore(state => state.remove)

  const handleRemoveRotate = useCallback(() => removeRotate(), [removeRotate])

  return <ButtonRemoveOption tooltipTitle='Remove rotate' onClick={handleRemoveRotate} />
}
