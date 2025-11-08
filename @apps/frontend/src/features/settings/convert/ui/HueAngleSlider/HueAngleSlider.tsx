import type { CSSProperties } from 'react'

import { MIN_HUE, MAX_HUE } from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import { useController } from 'react-hook-form'
import styles from './HueAngleSlider.module.css'

export const HueAngleSlider = () => {
  const {
    field: { value, onChange }
  } = useController({
    name: 'hue'
  })

  return (
    <Slider
      label='Hue angle'
      valueSign='°'
      value={[value]}
      defaultValue={[MIN_HUE]}
      min={MIN_HUE}
      max={MAX_HUE}
      // TODO: Add grayscale toggle
      disabled={false}
      sliderStyle={
        {
          '--hue-angle': value ?? MIN_HUE
        } as CSSProperties
      }
      sliderClassName={styles.root}
      onValueChange={values => onChange(values[0] ?? null)}
    />
  )
}
