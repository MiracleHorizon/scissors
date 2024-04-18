import { MAX_LIGHTNESS, MIN_LIGHTNESS } from '@scissors/sharp'

import { Slider } from '@design-system/slider'
import { useModulateStore } from '@stores/modulate'

export function SliderLightness() {
  const lightness = useModulateStore(state => state.lightness)

  const setLightness = useModulateStore(state => state.setLightness)
  const handleChangeLightness = (value: number[]) => {
    if (value.length === 1) {
      return setLightness(value[0])
    }

    setLightness(null)
  }

  return (
    <Slider
      title='Lightness'
      valueSign='%'
      value={[lightness]}
      defaultValue={[MIN_LIGHTNESS]}
      min={MIN_LIGHTNESS}
      max={MAX_LIGHTNESS}
      allowFloat
      onValueChange={handleChangeLightness}
    />
  )
}
