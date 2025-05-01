import type { CSSProperties } from 'react'

import { MIN_HUE, MAX_HUE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useModulationStore } from '../../../model/modulation/modulation.store'
import styles from './HueAngleSlider.module.css'

export const HueAngleSlider = () => {
  const hueAngle = useModulationStore(state => state.hue)
  const setHueAngle = useModulationStore(state => state.setHue)

  return (
    <Slider
      label='Hue angle'
      valueSign='°'
      value={[hueAngle]}
      defaultValue={[MIN_HUE]}
      min={MIN_HUE}
      max={MAX_HUE}
      // TODO: Add grayscale toggle
      disabled={false}
      sliderStyle={
        {
          '--hue-angle': hueAngle ?? MIN_HUE
        } as CSSProperties
      }
      sliderClassName={styles.root}
      onValueChange={values => setHueAngle(values[0] ?? null)}
    />
  )
}
