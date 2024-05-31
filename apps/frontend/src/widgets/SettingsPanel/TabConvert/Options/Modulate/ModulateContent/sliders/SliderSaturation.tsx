import { MAX_SATURATION, MIN_SATURATION, SATURATION_STEP } from '@scissors/sharp'

import { Slider } from '@design-system/Slider'
import { useModulateStore } from '@stores/modulate'

export const SliderSaturation = () => {
  const saturation = useModulateStore(state => state.saturation)

  const setSaturation = useModulateStore(state => state.setSaturation)
  const handleChangeSaturation = (value: number[]) => {
    if (value.length === 1) {
      return setSaturation(value[0])
    }

    setSaturation(null)
  }

  return (
    <Slider
      title='Saturation'
      value={[saturation]}
      defaultValue={[MIN_SATURATION]}
      min={MIN_SATURATION}
      max={MAX_SATURATION}
      step={SATURATION_STEP}
      allowFloat
      cySelector='slider-saturation'
      onValueChange={handleChangeSaturation}
    />
  )
}
