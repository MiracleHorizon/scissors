'use client'

import { ColorPicker } from '@ui/ColorPicker'
import { useResizeStore } from '@stores/resize'

export function ResizeBackgroundPopover({ background }: Props) {
  const setBackground = useResizeStore(state => state.setBackground)

  return (
    <ColorPicker
      color={background}
      setColor={setBackground}
      triggerLabel='Background'
      triggerLabelSize='2'
    />
  )
}

interface Props {
  background: string
}
