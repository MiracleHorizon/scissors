import { useState } from 'react'

import { Switch } from '@/shared/ui'

export const FlipSwitch = () => {
  const [flip, setFlip] = useState(false)

  return <Switch label='Flip' checked={flip} onClick={() => setFlip(prev => !prev)} />
}
