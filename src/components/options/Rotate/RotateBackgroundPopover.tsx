'use client'

import { PalettePopover } from '@components/PalettePopover'
import { useConvertStore } from '@stores/convert'

export function RotateBackgroundPopover() {
  const rotateBackground = useConvertStore(state => state.rotate?.background)

  const setRotateBackground = useConvertStore(state => state.setRotateBackground)

  if (!rotateBackground) {
    return null
  }

  return <PalettePopover color={rotateBackground} setColor={setRotateBackground} />
}
