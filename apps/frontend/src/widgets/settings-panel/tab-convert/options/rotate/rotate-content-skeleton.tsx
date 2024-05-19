import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@widgets/settings-panel/option-section-header/option-section-header-skeleton'
import { SliderSkeleton } from '@design-system/slider/slider-skeleton'
import { CheckboxSkeleton } from '@design-system/checkbox/checkbox-skeleton'
import { ColorFieldSkeleton } from '@ui/color-field/color-field-skeleton'

export const RotateContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <SliderSkeleton />
    <CheckboxSkeleton />
    <ColorFieldSkeleton />
  </Flex>
)
