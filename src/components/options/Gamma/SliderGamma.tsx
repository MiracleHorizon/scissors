'use client'

import { useCallback } from 'react'
import { ShadowIcon } from '@radix-ui/react-icons'

import { OptionSlider } from '@components/OptionSlider'
import { useConvertStore } from '@stores/convert'
import { MAX_GAMMA, MIN_GAMMA } from '@libs/Sharp'

export function SliderGamma() {
  const gammaValue = useConvertStore(state => state.gamma?.value)

  const setGamma = useConvertStore(state => state.setGamma)

  const handleGammaChange = useCallback((value: number[]) => setGamma(value[0]), [setGamma])

  return (
    <OptionSlider
      title='Gamma'
      titleIcon={<ShadowIcon width='18px' height='18px' />}
      value={[gammaValue ?? MIN_GAMMA]}
      defaultValue={[MIN_GAMMA]}
      step={0.1}
      min={MIN_GAMMA}
      max={MAX_GAMMA}
      onValueChange={handleGammaChange}
    />
  )
}
