import { useCallback } from 'react'

import {
  DEFAULT_RESIZE_POSITION,
  RESIZE_GRAVITY,
  RESIZE_POSITION,
  type ResizePosition
} from '@scissors/sharp'

import { Select, type SelectData } from '@design-system/Select'
import { useResizeStore } from '@stores/resize'

const data: SelectData = [
  {
    label: 'Position',
    value: Object.values(RESIZE_POSITION)
  },
  {
    label: 'Gravity',
    value: Object.values(RESIZE_GRAVITY)
  }
] as const

export function SelectResizePosition() {
  const position = useResizeStore(state => state.position)
  const setPosition = useResizeStore(state => state.setPosition)

  const handleSetPosition = useCallback(
    (value: ResizePosition) => setPosition(value),
    [setPosition]
  )

  return (
    <Select
      label='Position'
      value={position ?? DEFAULT_RESIZE_POSITION}
      defaultValue={DEFAULT_RESIZE_POSITION}
      data={data}
      onValueChange={handleSetPosition}
    />
  )
}
