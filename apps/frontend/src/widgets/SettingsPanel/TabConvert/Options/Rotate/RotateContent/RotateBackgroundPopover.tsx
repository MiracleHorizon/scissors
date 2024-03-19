import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { ColorPicker } from '@ui/ColorPicker'
import { useRotateStore } from '@stores/rotate'

export function RotateBackgroundPopover() {
  const rotateBackground = useRotateStore(state => state.background)
  const withDominantBackground = useRotateStore(state => state.withDominantBackground)

  const setRotateBackground = useRotateStore(state => state.setBackground)

  return (
    <ColorPicker
      color={rotateBackground ?? DEFAULT_ROTATE_BACKGROUND}
      setColor={setRotateBackground}
      disabled={withDominantBackground}
      triggerLabel='Background'
    />
  )
}
