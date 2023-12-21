'use client'

import { useCallback } from 'react'

import { OptionSlider } from '@widgets/SettingsPanel/OptionSlider'
import { useModulateStore } from '@stores/modulate'
import { MAX_HUE, MIN_HUE } from '@libs/Sharp'

export function SliderHue() {
  const hue = useModulateStore(state => state.hue)
  const setHue = useModulateStore(state => state.setHue)

  const handleSetHue = useCallback((value: number[]) => setHue(value[0]), [setHue])

  return (
    <OptionSlider
      title='Hue angle'
      value={[hue ?? MIN_HUE]}
      valueSign='°'
      min={MIN_HUE}
      max={MAX_HUE}
      defaultValue={[MIN_HUE]}
      step={1}
      onValueChange={handleSetHue}
    />
  )
}
