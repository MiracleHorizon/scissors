import { Flex } from '@radix-ui/themes'

import { OptionSectionHeaderSkeleton } from '@components/OptionSectionHeader/OptionSectionHeaderSkeleton'
import { ColorFieldSkeleton } from '@ui/ColorField/ColorFieldSkeleton'

export const TintContentSkeleton = () => (
  <Flex direction='column' gap='2' width='100%'>
    <OptionSectionHeaderSkeleton />
    <ColorFieldSkeleton withLabel={false} />
  </Flex>
)
