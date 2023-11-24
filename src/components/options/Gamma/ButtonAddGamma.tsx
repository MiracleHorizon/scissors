'use client'

import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useConvertStore } from '@stores/convert'

export function ButtonAddGamma() {
  const addGamma = useConvertStore(state => state.addGamma)

  const handleAddGamma = useCallback(() => addGamma(), [addGamma])

  return <ButtonAddOption title='Add gamma' onClick={handleAddGamma} />
}
