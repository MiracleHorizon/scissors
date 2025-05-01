import { MAX_LIGHTNESS, MIN_LIGHTNESS } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useModulationStore } from '../../../model/modulation/modulation.store'

export const LightnessSlider = () => {
  const lightness = useModulationStore(state => state.lightness)
  const setLightness = useModulationStore(state => state.setLightness)

  return (
    <Slider
      float
      label='Lightness'
      valueSign='%'
      value={[lightness]}
      defaultValue={[MIN_LIGHTNESS]}
      min={MIN_LIGHTNESS}
      max={MAX_LIGHTNESS}
      onValueChange={values => setLightness(values[0] ?? null)}
    />
  )
}
