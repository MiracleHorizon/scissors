import { Fragment } from 'react'
import { Separator } from '@radix-ui/themes'

import { SliderLightness } from './sliders/SliderLightness'
import { SliderBrightness } from './sliders/SliderBrightness'
import { SliderSaturation } from './sliders/SliderSaturation'
import { SliderHue } from './sliders/SliderHue'

const options = [
  { key: 'lightness', Component: SliderLightness },
  { key: 'brightness', Component: SliderBrightness },
  { key: 'saturation', Component: SliderSaturation },
  { key: 'hue', Component: SliderHue }
]

export function ModulateList() {
  return options.map(({ key, Component }, index) => (
    <Fragment key={key}>
      <Component />
      {index < options.length - 1 && <Separator my='1' size='4' />}
    </Fragment>
  ))
}
