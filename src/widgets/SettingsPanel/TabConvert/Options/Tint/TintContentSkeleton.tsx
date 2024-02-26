import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@components/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { ColorPickerSkeleton } from '@ui/ColorPicker/ColorPickerSkeleton'

export const TintContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <ColorPickerSkeleton withLabel={false} />
  </Flex>
)
