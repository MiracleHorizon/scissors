import { GAMMA_STEP, MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useGammaStore } from '../../../model/colorization/gamma.store'

export const GammaSlider = () => {
  const gamma = useGammaStore(state => state.get())
  const setGamma = useGammaStore(state => state.set)

  /* TODO: Add grayscale 
    disabled={isGrayscaleEnabled}
  */

  return (
    <Slider
      label='Gamma'
      value={[gamma]}
      defaultValue={[MIN_GAMMA]}
      step={GAMMA_STEP}
      min={MIN_GAMMA}
      max={MAX_GAMMA}
      onValueChange={values => setGamma(values[0] ?? null)}
    />
  )
}
