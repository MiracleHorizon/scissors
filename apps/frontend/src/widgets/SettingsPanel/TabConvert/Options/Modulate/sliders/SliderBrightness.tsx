import { OptionSlider } from '@components/OptionSlider'
import { useModulateStore } from '@stores/modulate'
import { BRIGHTNESS_STEP, MAX_BRIGHTNESS, MIN_BRIGHTNESS } from '@scissors/sharp'

export function SliderBrightness() {
  const brightness = useModulateStore(state => state.brightness)

  const setBrightness = useModulateStore(state => state.setBrightness)
  const handleChangeBrightness = (value: number[]) => {
    if (value.length === 1) {
      return setBrightness(value[0])
    }

    setBrightness(null)
  }

  return (
    <OptionSlider
      title='Brightness'
      value={[brightness]}
      defaultValue={[MIN_BRIGHTNESS]}
      min={MIN_BRIGHTNESS}
      max={MAX_BRIGHTNESS}
      step={BRIGHTNESS_STEP}
      allowFloat
      onValueChange={handleChangeBrightness}
    />
  )
}
