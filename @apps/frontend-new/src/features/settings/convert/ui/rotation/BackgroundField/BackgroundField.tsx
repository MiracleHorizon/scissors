import { useState } from 'react'

import { DEFAULT_ROTATE_BACKGROUND } from '@scissors/sharp'

import { ColorField } from '@/shared/ui'

export const RotationBackgroundField = () => {
  // TODO: Доделать
  const [rotationBackground, setRotationBackground] = useState<string | null>(
    DEFAULT_ROTATE_BACKGROUND
  )
  const [withDominantBackground] = useState(false)

  return (
    <ColorField
      label='Fallback background'
      value={rotationBackground ?? ''}
      defaultValue={DEFAULT_ROTATE_BACKGROUND}
      disabled={withDominantBackground}
      onValueChange={setRotationBackground}
    />
  )
}
