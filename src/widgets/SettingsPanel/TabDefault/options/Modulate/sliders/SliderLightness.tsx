'use client'

import { useCallback } from 'react'

import { OptionSlider } from '@components/OptionSlider'
import { useModulateStore } from '@stores/modulate'
import { MAX_LIGHTNESS, MIN_LIGHTNESS } from '@server/Sharp'

export function SliderLightness() {
  const lightness = useModulateStore(state => state.lightness)
  const setLightness = useModulateStore(state => state.setLightness)

  const handleSetLightness = useCallback(
    (value: number[]) => setLightness(value[0]),
    [setLightness]
  )

  return (
    <OptionSlider
      title='Lightness'
      value={[lightness ?? MIN_LIGHTNESS]}
      min={MIN_LIGHTNESS}
      max={MAX_LIGHTNESS}
      defaultValue={[MIN_LIGHTNESS]}
      step={1}
      onValueChange={handleSetLightness}
    />
  )
}
