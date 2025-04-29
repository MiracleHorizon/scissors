import { useState, type CSSProperties } from 'react'
import { Flex, Separator } from '@radix-ui/themes'

import {
  BRIGHTNESS_STEP,
  MAX_BRIGHTNESS,
  MAX_HUE,
  MAX_LIGHTNESS,
  MAX_SATURATION,
  MIN_BRIGHTNESS,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_SATURATION,
  SATURATION_STEP
} from '@scissors/sharp'

import { Slider } from '@/shared/ui'
import styles from './Modulate.module.css'

const initialState: Record<string, number> = {
  brightness: MIN_BRIGHTNESS,
  lightness: MIN_LIGHTNESS,
  saturation: MIN_SATURATION,
  hueAngle: MIN_HUE
} as const

export const Modulate = () => {
  const [state, setState] = useState(initialState)

  return (
    <Flex direction='column' gapY='1'>
      <Slider
        float
        label='Lightness'
        valueSign='%'
        value={[state.lightness]}
        defaultValue={[MIN_LIGHTNESS]}
        min={MIN_LIGHTNESS}
        max={MAX_LIGHTNESS}
        onValueChange={values =>
          setState({
            ...state,
            lightness: values[0] ?? MIN_LIGHTNESS
          })
        }
      />
      <Divider />

      <Slider
        float
        label='Brightness'
        value={[state.brightness]}
        defaultValue={[MIN_BRIGHTNESS]}
        min={MIN_BRIGHTNESS}
        max={MAX_BRIGHTNESS}
        step={BRIGHTNESS_STEP}
        onValueChange={values =>
          setState({
            ...state,
            brightness: values[0] ?? MIN_BRIGHTNESS
          })
        }
      />
      <Divider />

      <Slider
        label='Saturation'
        value={[state.saturation]}
        defaultValue={[MIN_SATURATION]}
        min={MIN_SATURATION}
        max={MAX_SATURATION}
        step={SATURATION_STEP}
        onValueChange={values =>
          setState({
            ...state,
            saturation: values[0] ?? MIN_SATURATION
          })
        }
      />
      <Divider />

      <Slider
        label='Hue angle'
        valueSign='°'
        value={[state.hueAngle]}
        defaultValue={[MIN_HUE]}
        min={MIN_HUE}
        max={MAX_HUE}
        // TODO: Add grayscale toggle
        disabled={false}
        sliderStyle={
          {
            '--hue-angle': state.hueAngle ?? MIN_HUE
          } as CSSProperties
        }
        sliderClassName={styles.hueAngleSlider}
        onValueChange={values =>
          setState({
            ...state,
            hueAngle: values[0] ?? MIN_HUE
          })
        }
      />
    </Flex>
  )
}

const Divider = () => <Separator my='1' size='4' />
