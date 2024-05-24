import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@widgets/SettingsPanel/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { SliderSkeleton } from '@design-system/Slider/SliderSkeleton'
import { CheckboxSkeleton } from '@design-system/Checkbox/CheckboxSkeleton'
import { ColorFieldSkeleton } from '@ui/ColorField/ColorFieldSkeleton'

export const RotateContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <SliderSkeleton />
    <CheckboxSkeleton />
    <ColorFieldSkeleton />
  </Flex>
)
