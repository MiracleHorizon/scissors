import { Flex, Skeleton } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

export const OptionSectionHeaderSkeleton: FC<MarginProps> = props => (
  <Flex gap='3' width='100%' {...props}>
    <Skeleton height='32px' width='100%' />
    <Skeleton height='32px' width='68px' />
  </Flex>
)
