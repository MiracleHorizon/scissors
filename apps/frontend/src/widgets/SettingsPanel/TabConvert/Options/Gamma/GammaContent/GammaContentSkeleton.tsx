import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@widgets/SettingsPanel/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { SliderSkeleton } from '@design-system/Slider/SliderSkeleton'

export const GammaContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <SliderSkeleton />
  </Flex>
)
