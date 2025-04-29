import { Flex } from '@radix-ui/themes'
import { useState } from 'react'

import { DEFAULT_TINT_COLOR, GAMMA_STEP, MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { ColorField, Slider } from '@/shared/ui'

export const Colorize = () => {
  const [tint, setTint] = useState<string>(DEFAULT_TINT_COLOR)
  const [gamma, setGamma] = useState<number>(MIN_GAMMA)

  return (
    <Flex direction='column' gapY='2'>
      {/* TODO: Add grayscale 
        disabled={isGrayscaleEnabled}
      */}
      <Slider
        label='Gamma'
        value={[gamma]}
        defaultValue={[MIN_GAMMA]}
        step={GAMMA_STEP}
        min={MIN_GAMMA}
        max={MAX_GAMMA}
        onValueChange={values => setGamma(values[0] ?? MIN_GAMMA)}
      />
      <ColorField label='Tint' value={tint} onValueChange={setTint} />
    </Flex>
  )
}
