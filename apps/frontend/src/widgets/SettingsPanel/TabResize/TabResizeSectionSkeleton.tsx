import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import type { FC } from 'react'

export const TabResizeSectionSkeleton: FC<Props> = ({ height }) => (
  <Flex width='100%' pr='3'>
    <Skeleton height={height} containerClassName='w-full' />
  </Flex>
)

interface Props {
  height: number
}
