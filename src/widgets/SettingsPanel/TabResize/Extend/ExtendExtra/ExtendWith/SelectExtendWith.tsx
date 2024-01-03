'use client'

import { useCallback } from 'react'

import { OptionSelect } from '@components/OptionSelect'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_WITH, ExtendWith } from '@server/Sharp'

const data = [
  {
    value: Object.values(ExtendWith)
  }
]

export function SelectExtendWith() {
  const extendWith = useExtendStore(state => state.extendWith)

  const setExtendWith = useExtendStore(state => state.setExtendWith)

  const handleSetExtendWith = useCallback(
    (value: ExtendWith) => setExtendWith(value),
    [setExtendWith]
  )

  return (
    <OptionSelect
      label='Extend with'
      value={extendWith}
      defaultValue={DEFAULT_EXTEND_WITH}
      onValueChange={handleSetExtendWith}
      data={data}
    />
  )
}
