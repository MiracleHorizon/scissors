import { Flex, Skeleton } from '@radix-ui/themes'
import type { FC } from 'react'

export const TabResizeSectionSkeleton: FC<Props> = ({ height }) => (
  <Flex width='100%' pr='3'>
    <Skeleton width='100%' height={height} />
  </Flex>
)

interface Props {
  height: string
}
