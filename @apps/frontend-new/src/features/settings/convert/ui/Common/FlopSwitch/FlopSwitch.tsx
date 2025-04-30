import { useState } from 'react'

import { Switch } from '@/shared/ui'

export const FlopSwitch = () => {
  const [flop, setFlop] = useState(false)

  return <Switch label='Flop' checked={flop} onClick={() => setFlop(prev => !prev)} />
}
