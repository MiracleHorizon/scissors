import { Fragment } from 'react'
import { Separator } from '@radix-ui/themes'

import { SliderLightness } from './sliders/slider-lightness'
import { SliderBrightness } from './sliders/slider-brightness'
import { SliderSaturation } from './sliders/slider-saturation'
import { SliderHue } from './sliders/slider-hue'

const options = [
  { key: 'lightness', Component: SliderLightness },
  { key: 'brightness', Component: SliderBrightness },
  { key: 'saturation', Component: SliderSaturation },
  { key: 'hue', Component: SliderHue }
] as const

export const ModulateList = () =>
  options.map(({ key, Component }, index) => (
    <Fragment key={key}>
      <Component />
      {index < options.length - 1 && <Separator my='1' size='4' />}
    </Fragment>
  ))
