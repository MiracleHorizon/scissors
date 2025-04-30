import { useState } from 'react'

import { Switch } from '@/shared/ui'

export const NegateSwitch = () => {
  const [negate, setNegate] = useState(false)

  return <Switch label='Negate' checked={negate} onClick={() => setNegate(prev => !prev)} />
}
