import { Flex, Skeleton } from '@radix-ui/themes'
import type { FC } from 'react'

interface Props {
  height: string
}

export const TabResizeSectionSkeleton: FC<Props> = ({ height }) => (
  <Flex width='100%' pr='3'>
    <Skeleton width='100%' height={height} />
  </Flex>
)
