'use client'

import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useConvertStore } from '@stores/convert'

export function ButtonAddRotate() {
  const addRotate = useConvertStore(state => state.addRotate)

  const handleAddRotate = useCallback(() => addRotate(), [addRotate])

  return (
    <ButtonAddOption
      title='Add rotate'
      tooltipTitle='Add image rotation'
      onClick={handleAddRotate}
    />
  )
}
