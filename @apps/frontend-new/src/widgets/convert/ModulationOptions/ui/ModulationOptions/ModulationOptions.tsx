import { Flex, Separator as RadixSeparator } from '@radix-ui/themes'

import {
  BrightnessSlider,
  HueAngleSlider,
  LightnessSlider,
  SaturationSlider
} from '@/features/settings/convert'

export const ModulationOptions = () => (
  <Flex direction='column' gapY='1' pb='2'>
    <LightnessSlider />
    <Separator />

    <BrightnessSlider />
    <Separator />

    <SaturationSlider />
    <Separator />

    <HueAngleSlider />
  </Flex>
)

const Separator = () => <RadixSeparator mt='3' mb='1' size='4' />
