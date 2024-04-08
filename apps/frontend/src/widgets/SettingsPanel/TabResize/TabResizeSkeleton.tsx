import { Flex, Skeleton } from '@radix-ui/themes'

export const TabResizeSkeleton = () => (
  <Flex direction='column' gap='2' height='100%' width='100%'>
    <Skeleton height='104px' width='100%' />
    <Skeleton height='200px' width='100%' />
    <Skeleton height='240px' width='100%' />
  </Flex>
)
