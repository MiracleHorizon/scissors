import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { ColorField } from '@ui/ColorField'
import { useRotateStore } from '@stores/rotate'

export const RotateBackgroundPopover = () => {
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
