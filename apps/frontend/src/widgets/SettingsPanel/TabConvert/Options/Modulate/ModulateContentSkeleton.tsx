import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@components/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { OptionSliderSkeleton } from '@components/OptionSlider/OptionSliderSkeleton'

export const ModulateContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton mb='2' />

    <Flex direction='column' width='100%' gap='4'>
      <OptionSliderSkeleton withLabel withInput />
      <OptionSliderSkeleton withLabel withInput />
      <OptionSliderSkeleton withLabel withInput />
      <OptionSliderSkeleton withLabel withInput />
    </Flex>
  </Flex>
)
