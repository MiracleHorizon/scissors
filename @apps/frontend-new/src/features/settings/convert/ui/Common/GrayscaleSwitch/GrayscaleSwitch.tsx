import { useState } from 'react'

import { Switch } from '@/shared/ui'

export const GrayscaleSwitch = () => {
  const [grayscale, setGrayscale] = useState(false)

  return (
    <Switch label='Grayscale' checked={grayscale} onClick={() => setGrayscale(prev => !prev)} />
  )
}
