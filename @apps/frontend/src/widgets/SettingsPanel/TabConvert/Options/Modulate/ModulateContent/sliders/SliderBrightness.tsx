import { BRIGHTNESS_STEP, MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@scissors/sharp'

import { Slider } from '@lib/ui/Slider'
import { useModulateStore } from '@stores/modulate'

export const SliderBrightness = () => {
  const brightness = useModulateStore(state => state.brightness)

  const setBrightness = useModulateStore(state => state.setBrightness)
  const handleChangeBrightness = (value: number[]) => {
    if (value.length === 1) {
      return setBrightness(value[0])
    }

    setBrightness(null)
  }

  return (
    <Slider
      title='Brightness'
      value={[brightness]}
      defaultValue={[MIN_BRIGHTNESS]}
      min={MIN_BRIGHTNESS}
      max={MAX_BRIGHTNESS}
      step={BRIGHTNESS_STEP}
      allowFloat
      cySelector='slider-brightness'
      onValueChange={handleChangeBrightness}
    />
  )
}
