import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@widgets/SettingsPanel/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { SliderSkeleton } from '@design-system/Slider/SliderSkeleton'

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
