import { useCallback } from 'react'

import {
  DEFAULT_RESIZE_POSITION,
  RESIZE_GRAVITY,
  RESIZE_POSITION,
  type ResizeGravity,
  type ResizePosition
} from '@scissors/sharp'

import { OptionSelect, type OptionSelectData } from '@components/OptionSelect'
import { useResizeStore } from '@stores/resize'

const data: OptionSelectData<ResizePosition | ResizeGravity> = [
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
    <OptionSelect
      label='Position'
      value={position ?? DEFAULT_RESIZE_POSITION}
      defaultValue={DEFAULT_RESIZE_POSITION}
      data={data}
      onValueChange={handleSetPosition}
    />
  )
}
