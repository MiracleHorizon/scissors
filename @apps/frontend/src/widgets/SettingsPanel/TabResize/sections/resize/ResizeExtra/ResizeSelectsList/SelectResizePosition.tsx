import { useCallback } from 'react'

import {
  DEFAULT_RESIZE_POSITION,
  RESIZE_GRAVITY,
  RESIZE_POSITION,
  type ResizePosition
} from '@scissors/sharp'

import { Select, type SelectData } from '@lib/ui/Select'
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

export const SelectResizePosition = () => {
  const position = useResizeStore(state => state.position)
  const setPosition = useResizeStore(state => state.setPosition)

  const handleSetPosition = useCallback(
    (value: ResizePosition) => setPosition(value),
    [setPosition]
  )

  return (
    <Select
      label='Position'
      data={data}
      value={position ?? DEFAULT_RESIZE_POSITION}
      defaultValue={DEFAULT_RESIZE_POSITION}
      triggerCySelector='sl-resize-position-trigger'
      contentCySelector='sl-resize-position-content'
      onValueChange={handleSetPosition}
    />
  )
}
