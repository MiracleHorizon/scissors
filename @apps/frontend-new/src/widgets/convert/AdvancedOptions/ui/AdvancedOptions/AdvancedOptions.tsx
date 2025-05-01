import { Flex, Separator } from '@radix-ui/themes'

import { BlurSigmaSlider, NormalizeSlider } from '@/features/settings/convert'

export const AdvancedOptions = () => (
  <Flex direction='column' gap='2'>
    <BlurSigmaSlider />
    <Separator size='4' />
    <NormalizeSlider />
  </Flex>
)
