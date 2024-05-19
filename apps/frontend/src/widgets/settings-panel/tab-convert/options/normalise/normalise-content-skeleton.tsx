import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@widgets/settings-panel/option-section-header/option-section-header-skeleton'
import { SliderSkeleton } from '@design-system/slider/slider-skeleton'

export const NormaliseContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <SliderSkeleton />
  </Flex>
)
