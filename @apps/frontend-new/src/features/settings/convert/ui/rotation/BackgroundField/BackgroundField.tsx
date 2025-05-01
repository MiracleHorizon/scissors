import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { ColorField } from '@/shared/ui'
import { useRotateStore } from '../../../model/rotation/rotation.store'

export const RotationBackgroundField = () => {
  const background = useRotateStore(state => state.background)
  const setBackground = useRotateStore(state => state.setBackground)

  return (
    <ColorField
      label='Fallback background'
      value={background ?? ''}
      defaultValue={DEFAULT_ROTATE_BACKGROUND}
      onValueChange={setBackground}
    />
  )
}
