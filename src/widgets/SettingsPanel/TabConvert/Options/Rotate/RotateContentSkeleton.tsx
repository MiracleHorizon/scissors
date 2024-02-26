import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@components/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { OptionSliderSkeleton } from '@components/OptionSlider/OptionSliderSkeleton'
import { OptionCheckboxSkeleton } from '@components/OptionCheckbox/OptionCheckboxSkeleton'
import { ColorPickerSkeleton } from '@ui/ColorPicker/ColorPickerSkeleton'

export const RotateContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <OptionSliderSkeleton />
    <OptionCheckboxSkeleton />
    <ColorPickerSkeleton />
  </Flex>
)
