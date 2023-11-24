'use client'

import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useConvertStore } from '@stores/convert'

export function ButtonAddNormalise() {
  const addNormalise = useConvertStore(state => state.addNormalise)

  const handleAddNormalise = useCallback(() => addNormalise(), [addNormalise])

  return <ButtonAddOption title='Add normalise' onClick={handleAddNormalise} />
}
