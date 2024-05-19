import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { ColorField } from '@ui/color-field'
import { useRotateStore } from '@stores/rotate'

export function RotateBackgroundPopover() {
  const rotateBackground = useRotateStore(state => state.background)
  const withDominantBackground = useRotateStore(state => state.withDominantBackground)

  const setRotateBackground = useRotateStore(state => state.setBackground)

  return (
    <ColorField
      label='Background'
      value={rotateBackground ?? DEFAULT_ROTATE_BACKGROUND}
      disabled={withDominantBackground}
      onValueChange={setRotateBackground}
    />
  )
}
