import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@components/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { OptionSliderSkeleton } from '@components/OptionSlider/OptionSliderSkeleton'

export const BlurSigmaSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <OptionSliderSkeleton />
  </Flex>
)
