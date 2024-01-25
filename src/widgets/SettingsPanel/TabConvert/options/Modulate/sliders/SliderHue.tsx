import { OptionSlider } from '@components/OptionSlider'
import { useModulateStore } from '@stores/modulate'
import { useConvertStore } from '@stores/convert'
import { MAX_HUE, MIN_HUE } from '@server/sharp'

export function SliderHue() {
  const hue = useModulateStore(state => state.hue)
  const isGrayscaleEnabled = useConvertStore(state => state.grayscale)

  const setHue = useModulateStore(state => state.setHue)
  const handleChangeHue = (value: number[]) => {
    if (value.length === 1) {
      return setHue(value[0])
    }

    return setHue(null)
  }

  return (
    <OptionSlider
      title='Hue angle'
      valueSign='°'
      value={[hue]}
      defaultValue={[MIN_HUE]}
      min={MIN_HUE}
      max={MAX_HUE}
      disabled={isGrayscaleEnabled}
      onValueChange={handleChangeHue}
    />
  )
}
