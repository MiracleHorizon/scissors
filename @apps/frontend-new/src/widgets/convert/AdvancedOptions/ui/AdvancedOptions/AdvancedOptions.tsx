import { Flex, Separator } from '@radix-ui/themes'

import { BlurSigmaSlider, NormalizeSlider } from '@/features/settings/convert'

export const AdvancedOptions = () => (
  <Flex direction='column' gapY='1' pb='2'>
    <BlurSigmaSlider />
    <Separator size='4' mt='3' mb='1' />
    <NormalizeSlider />
  </Flex>
)
