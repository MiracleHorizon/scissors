import { DEFAULT_GAMMA, GAMMA_STEP, MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'
import { useController } from 'react-hook-form'

import { Slider } from '@/shared/ui'

export const GammaSlider = () => {
  const { field } = useController({
    name: 'gamma'
  })

  /* TODO: Add grayscale 
    disabled={isGrayscaleEnabled}
  */

  return (
    <Slider
      label='Gamma'
      value={[field.value]}
      defaultValue={[DEFAULT_GAMMA]}
      step={GAMMA_STEP}
      min={MIN_GAMMA}
      max={MAX_GAMMA}
      onValueChange={field.onChange}
    />
  )
}
