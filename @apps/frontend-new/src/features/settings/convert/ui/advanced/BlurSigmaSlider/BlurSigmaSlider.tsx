import {
  DEFAULT_BLUR_SIGMA,
  BLUR_SIGMA_STEP,
  MAX_BLUR_SIGMA,
  MIN_BLUR_SIGMA
} from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useAdvancedStore } from '../../../model/advanced/advanced.store'

export const BlurSigmaSlider = () => {
  const sigma = useAdvancedStore(state => state.blurSigma)
  const setSigma = useAdvancedStore(state => state.setBlurSigma)

  return (
    <Slider
      label='Blur'
      value={[sigma]}
      defaultValue={[DEFAULT_BLUR_SIGMA]}
      min={MIN_BLUR_SIGMA}
      max={MAX_BLUR_SIGMA}
      step={BLUR_SIGMA_STEP}
      onValueChange={values => setSigma(values[0] ?? null)}
    />
  )
}
