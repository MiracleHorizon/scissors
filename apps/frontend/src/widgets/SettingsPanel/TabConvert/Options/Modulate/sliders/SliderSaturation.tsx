import { MAX_SATURATION, MIN_SATURATION, SATURATION_STEP } from '@scissors/sharp'

import { OptionSlider } from '@components/OptionSlider'
import { useModulateStore } from '@stores/modulate'

export function SliderSaturation() {
  const saturation = useModulateStore(state => state.saturation)

  const setSaturation = useModulateStore(state => state.setSaturation)
  const handleChangeSaturation = (value: number[]) => {
    if (value.length === 1) {
      return setSaturation(value[0])
    }

    setSaturation(null)
  }

  return (
    <OptionSlider
      title='Saturation'
      value={[saturation]}
      defaultValue={[MIN_SATURATION]}
      min={MIN_SATURATION}
      max={MAX_SATURATION}
      step={SATURATION_STEP}
      allowFloat
      onValueChange={handleChangeSaturation}
    />
  )
}
