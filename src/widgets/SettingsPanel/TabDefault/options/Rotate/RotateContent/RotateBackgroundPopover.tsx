import { ColorPicker } from '@ui/ColorPicker'
import { useRotateStore } from '@stores/rotate'
import { DEFAULT_ROTATE_BACKGROUND } from '@server/sharp'

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
