import { Flex, Skeleton } from '@radix-ui/themes'

import { tabResizePadding } from './styles'

export const TabResizeSkeleton = () => (
  <Flex {...tabResizePadding} direction='column' gap='2' height='100%' width='100%'>
    <Skeleton height='104px' width='100%' />
    <Skeleton height='200px' width='100%' />
    <Skeleton height='240px' width='100%' />
  </Flex>
)
