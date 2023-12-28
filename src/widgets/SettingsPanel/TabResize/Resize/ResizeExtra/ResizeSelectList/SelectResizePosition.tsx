'use client'

import { useCallback } from 'react'

import { OptionSelect } from '@components/OptionSelect'
import { useResizeStore } from '@stores/resize'
import { DEFAULT_RESIZE_POSITION, ResizePosition, ResizePositionGravity } from '@server/Sharp'

const data = [
  {
    label: 'Position',
    value: Object.values(ResizePosition)
  },
  {
    label: 'Gravity',
    value: Object.values(ResizePositionGravity)
  }
]

export function SelectResizePosition() {
  const position = useResizeStore(state => state.position)
  const setPosition = useResizeStore(state => state.setPosition)

  const handleSetPosition = useCallback(
    (value: ResizePosition) => setPosition(value),
    [setPosition]
  )

  return (
    <OptionSelect
      label='Position'
      value={position ?? DEFAULT_RESIZE_POSITION}
      defaultValue={DEFAULT_RESIZE_POSITION}
      data={data}
      onValueChange={handleSetPosition}
    />
  )
}
