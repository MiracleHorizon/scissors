import { MAX_SATURATION, MIN_SATURATION, SATURATION_STEP } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useModulationStore } from '../../../model/modulation/modulation.store'

export const SaturationSlider = () => {
  const saturation = useModulationStore(state => state.saturation)
  const setSaturation = useModulationStore(state => state.setSaturation)

  return (
    <Slider
      label='Saturation'
      value={[saturation]}
      defaultValue={[MIN_SATURATION]}
      min={MIN_SATURATION}
      max={MAX_SATURATION}
      step={SATURATION_STEP}
      onValueChange={values => setSaturation(values[0] ?? null)}
    />
  )
}
