import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@widgets/settings-panel/option-section-header/option-section-header-skeleton'
import { ColorFieldSkeleton } from '@ui/color-field/color-field-skeleton'

export const TintContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <ColorFieldSkeleton withLabel={false} />
  </Flex>
)
