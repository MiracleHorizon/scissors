'use client'

import { PalettePopover } from '@components/PalettePopover'
import { useRotateStore } from '@stores/rotate'

export function RotateBackgroundPopover() {
  const rotateBackground = useRotateStore(state => state.background)
  const withDominantBackground = useRotateStore(state => state.withDominantBackground)

  const setRotateBackground = useRotateStore(state => state.setBackground)

  if (!rotateBackground) {
    return null
  }

  return (
    <PalettePopover
      color={rotateBackground}
      setColor={setRotateBackground}
      disabled={withDominantBackground}
    />
  )
}
