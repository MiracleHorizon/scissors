'use client'

import { useCallback } from 'react'

import { OptionSlider } from '@widgets/SettingsPanel/OptionSlider'
import { useGammaStore } from '@stores/gamma'
import { MAX_GAMMA, MIN_GAMMA } from '@server/Sharp'

export function SliderGamma() {
  const gammaValue = useGammaStore(state => state.gamma?.value)

  const setGamma = useGammaStore(state => state.setValue)

  const handleGammaChange = useCallback((value: number[]) => setGamma(value[0]), [setGamma])

  return (
    <OptionSlider
      value={[gammaValue ?? MIN_GAMMA]}
      defaultValue={[MIN_GAMMA]}
      step={0.1}
      min={MIN_GAMMA}
      max={MAX_GAMMA}
      onValueChange={handleGammaChange}
    />
  )
}
