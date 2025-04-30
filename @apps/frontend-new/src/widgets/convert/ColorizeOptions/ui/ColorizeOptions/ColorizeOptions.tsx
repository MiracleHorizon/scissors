import { Flex, Separator } from '@radix-ui/themes'

import { GammaSlider, TintField } from '@/features/settings/convert'

// TODO: Colorization
export const ColorizeOptions = () => (
  <Flex direction='column' gapY='2'>
    <GammaSlider />
    <Separator size='4' />
    <TintField />
  </Flex>
)
