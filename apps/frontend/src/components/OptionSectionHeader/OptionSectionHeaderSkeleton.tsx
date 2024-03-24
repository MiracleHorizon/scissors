import Skeleton from 'react-loading-skeleton'
import { Flex } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

export const OptionSectionHeaderSkeleton: FC<MarginProps> = props => (
  <Flex gap='3' width='100%' {...props}>
    <Skeleton height={32} containerClassName='w-full' />
    <Skeleton height={32} width={68} />
  </Flex>
)
