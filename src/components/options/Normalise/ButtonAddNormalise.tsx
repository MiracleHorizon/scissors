'use client'

import { useCallback } from 'react'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useNormaliseStore } from '@stores/normalise'

export function ButtonAddNormalise() {
  const addNormalise = useNormaliseStore(state => state.add)

  const handleAddNormalise = useCallback(() => addNormalise(), [addNormalise])

  return <ButtonAddOption title='Add normalise' onClick={handleAddNormalise} />
}
