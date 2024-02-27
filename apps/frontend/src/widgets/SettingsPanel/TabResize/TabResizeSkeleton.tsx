import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import { tabResizePadding } from './styles'

const TabResizeSectionSkeleton = ({ height }: { height: number | string }) => (
  <Skeleton height={height} borderRadius='8px' containerClassName='w-full' />
)

export const TabResizeSkeleton = () => (
  <Flex {...tabResizePadding} direction='column' height='100%' gap='2' width='100%'>
    <Skeleton height={104} borderRadius='8px' containerClassName='w-full' />

    <TabResizeSectionSkeleton height='200px' />
    <TabResizeSectionSkeleton height='240px' />
  </Flex>
)
