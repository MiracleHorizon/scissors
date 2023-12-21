'use client'

import { useCallback } from 'react'

import { OptionSlider } from '@widgets/SettingsPanel/OptionSlider'
import { useModulateStore } from '@stores/modulate'
import { MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@libs/Sharp'

export function SliderBrightness() {
  const brightness = useModulateStore(state => state.brightness)
  const setBrightness = useModulateStore(state => state.setBrightness)

  const handleSetBrightness = useCallback(
    (value: number[]) => setBrightness(value[0]),
    [setBrightness]
  )

  return (
    <OptionSlider
      title='Brightness'
      value={[brightness ?? MIN_BRIGHTNESS]}
      min={MIN_BRIGHTNESS}
      max={MAX_BRIGHTNESS}
      defaultValue={[MIN_BRIGHTNESS]}
      step={0.1}
      onValueChange={handleSetBrightness}
    />
  )
}
