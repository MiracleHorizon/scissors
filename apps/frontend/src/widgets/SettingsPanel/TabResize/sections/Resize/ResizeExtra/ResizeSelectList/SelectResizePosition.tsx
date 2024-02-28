import { useCallback } from 'react'

import { OptionSelect } from '@components/OptionSelect'
import { useResizeStore } from '@stores/resize'
import {
  DEFAULT_RESIZE_POSITION,
  RESIZE_GRAVITY,
  RESIZE_POSITION,
  type ResizePosition
} from '@server/sharp'

const data = [
  {
    label: 'Position',
    value: Object.values(RESIZE_POSITION)
  },
  {
    label: 'Gravity',
    value: Object.values(RESIZE_GRAVITY)
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
