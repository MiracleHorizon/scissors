'use client'

import { useCallback } from 'react'

import { ResizeSelect } from '../ResizeSelect'
import { useResizeStore } from '@stores/resize'
import { DEFAULT_RESIZE_POSITION, ResizePosition, ResizePositionGravity } from '@libs/Sharp'

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
  const position = useResizeStore(state => state.extra?.position)
  const setPosition = useResizeStore(state => state.setPosition)

  const handleSetPosition = useCallback(
    (value: ResizePosition) => setPosition(value),
    [setPosition]
  )

  return (
    <ResizeSelect
      value={position ?? DEFAULT_RESIZE_POSITION}
      defaultValue={DEFAULT_RESIZE_POSITION}
      data={data}
      onValueChange={handleSetPosition}
    />
  )
}
