import { BRIGHTNESS_STEP, MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useModulationStore } from '../../../model/modulation/modulation.store'

export const BrightnessSlider = () => {
  const brightness = useModulationStore(state => state.brightness)
  const setBrightness = useModulationStore(state => state.setBrightness)

  return (
    <Slider
      float
      label='Brightness'
      value={[brightness]}
      defaultValue={[MIN_BRIGHTNESS]}
      min={MIN_BRIGHTNESS}
      max={MAX_BRIGHTNESS}
      step={BRIGHTNESS_STEP}
      onValueChange={values => setBrightness(values[0] ?? null)}
    />
  )
}
