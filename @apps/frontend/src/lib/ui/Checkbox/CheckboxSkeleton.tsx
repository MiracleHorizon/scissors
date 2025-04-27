import { Flex, Skeleton } from '@radix-ui/themes'

export const CheckboxSkeleton = () => (
  <Flex gap='1' width='100%'>
    <Skeleton height='20px' width='20px' />
    <Skeleton height='20px' width='100%' />
  </Flex>
)
