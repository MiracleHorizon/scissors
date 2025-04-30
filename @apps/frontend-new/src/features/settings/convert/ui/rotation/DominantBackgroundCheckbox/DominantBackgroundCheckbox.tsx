import { useState } from 'react'

import { Checkbox } from '@/shared/ui'

export const DominantBackgroundCheckbox = () => {
  const [withDominantBackground, setWithDominantBackground] = useState(false)

  return (
    <Checkbox
      label='Use dominant background'
      checked={withDominantBackground}
      onClick={() => setWithDominantBackground(prevState => !prevState)}
    />
  )
}
