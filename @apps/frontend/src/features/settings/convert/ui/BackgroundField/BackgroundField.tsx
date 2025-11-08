import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { ColorField } from '@/shared/ui'
import { useController } from 'react-hook-form'

export const RotationBackgroundField = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'rotationBackground'
  })

  return (
    <ColorField
      withPalette
      label='Fallback color'
      value={value ?? ''}
      defaultValue={DEFAULT_ROTATE_BACKGROUND}
      onValueChange={onChange}
    />
  )
}
