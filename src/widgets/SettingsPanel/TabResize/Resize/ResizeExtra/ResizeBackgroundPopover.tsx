'use client'

import { PalettePopover } from '@components/PalettePopover'
import { useResizeStore } from '@stores/resize'

export function ResizeBackgroundPopover({ background }: Props) {
  const setBackground = useResizeStore(state => state.setBackground)

  return (
    <PalettePopover
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
