import { DEFAULT_NORMALIZE, MAX_NORMALIZE, MIN_NORMALIZE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useAdvancedStore } from '../../../model/advanced/advanced.store'

export const NormalizeSlider = () => {
  const normalize = useAdvancedStore(state => state.getNormalize())
  const setLowerNormalize = useAdvancedStore(state => state.setLowerNormalize)
  const setUpperNormalize = useAdvancedStore(state => state.setUpperNormalize)

  return (
    <Slider
      label='Normalization'
      valueSign='%'
      value={[normalize.lower, normalize.upper]}
      defaultValue={[DEFAULT_NORMALIZE.lower, DEFAULT_NORMALIZE.upper]}
      min={MIN_NORMALIZE}
      max={MAX_NORMALIZE}
      minStepsBetweenThumbs={1}
      onValueChange={values => {
        if (normalize.lower !== values[0]) {
          setLowerNormalize(values[0])
        }

        if (normalize.upper !== values[1]) {
          setUpperNormalize(values[1])
        }
      }}
    />
  )
}
