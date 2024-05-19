import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@widgets/settings-panel/option-section-header/option-section-header-skeleton'
import { SliderSkeleton } from '@design-system/slider/slider-skeleton'

export const ModulateContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton mb='2' />

    <Flex direction='column' width='100%' gap='4'>
      <SliderSkeleton withLabel withInput />
      <SliderSkeleton withLabel withInput />
      <SliderSkeleton withLabel withInput />
      <SliderSkeleton withLabel withInput />
    </Flex>
  </Flex>
)
