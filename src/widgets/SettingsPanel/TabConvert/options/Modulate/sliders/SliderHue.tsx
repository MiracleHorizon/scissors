import type { CSSProperties } from 'react'

import { OptionSlider } from '@components/OptionSlider'
import { useModulateStore } from '@stores/modulate'
import { useConvertStore } from '@stores/convert'
import { MAX_HUE, MIN_HUE } from '@server/sharp'
import styles from './SliderHue.module.css'

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

  const sliderThumbStyle = {
    '--hue-angle': hue ?? MIN_HUE
  } as CSSProperties

  return (
    <OptionSlider
      title='Hue angle'
      valueSign='°'
      value={[hue]}
      defaultValue={[MIN_HUE]}
      min={MIN_HUE}
      max={MAX_HUE}
      disabled={isGrayscaleEnabled}
      sliderStyle={sliderThumbStyle}
      sliderClassName={styles.slider}
      onValueChange={handleChangeHue}
    />
  )
}
