import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { ColorField } from '@/shared/ui'
import { useRotationStore } from '../../../model/rotation/rotation.store'

export const RotationBackgroundField = () => {
  const background = useRotationStore(state => state.background)
  const setBackground = useRotationStore(state => state.setBackground)

  return (
    <ColorField
      label='Fallback background'
      value={background ?? ''}
      defaultValue={DEFAULT_ROTATE_BACKGROUND}
      onValueChange={setBackground}
    />
  )
}
