import { GAMMA_STEP, MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { Slider } from '@design-system/slider'
import { useGammaStore } from '@stores/gamma'

export function SliderGamma() {
  const gamma = useGammaStore(state => state.gamma)

  const setGamma = useGammaStore(state => state.setValue)
  const handleChangeGamma = (value: number[]) => {
    if (value.length === 1) {
      return setGamma(value[0])
    }

    setGamma(null)
  }

  return (
    <Slider
      value={[gamma]}
      defaultValue={[MIN_GAMMA]}
      step={GAMMA_STEP}
      min={MIN_GAMMA}
      max={MAX_GAMMA}
      allowFloat
      onValueChange={handleChangeGamma}
    />
  )
}
