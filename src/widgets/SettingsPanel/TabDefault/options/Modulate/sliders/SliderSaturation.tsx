'use client'

import { useCallback } from 'react'

import { OptionSlider } from '@widgets/SettingsPanel/OptionSlider'
import { useModulateStore } from '@stores/modulate'
import { MAX_SATURATION, MIN_SATURATION } from '@server/Sharp'

export function SliderSaturation() {
  const saturation = useModulateStore(state => state.saturation)
  const setSaturation = useModulateStore(state => state.setSaturation)

  const handleSetSaturation = useCallback(
    (value: number[]) => setSaturation(value[0]),
    [setSaturation]
  )

  return (
    <OptionSlider
      title='Saturation'
      value={[saturation ?? MIN_SATURATION]}
      min={MIN_SATURATION}
      max={MAX_SATURATION}
      defaultValue={[MIN_SATURATION]}
      step={0.1}
      onValueChange={handleSetSaturation}
    />
  )
}
