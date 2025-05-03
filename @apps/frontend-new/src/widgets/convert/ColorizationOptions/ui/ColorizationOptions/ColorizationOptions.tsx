import { Flex, Separator } from '@radix-ui/themes'

import { GammaSlider, TintField } from '@/features/settings/convert'

export const ColorizationOptions = () => (
  <Flex direction='column' gapY='1'>
    <GammaSlider />
    <Separator size='4' mt='3' mb='1' />
    <TintField />
  </Flex>
)
