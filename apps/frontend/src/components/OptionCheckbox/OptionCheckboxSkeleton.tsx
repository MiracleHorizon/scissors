import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

export const OptionCheckboxSkeleton = () => (
  <Flex gap='1' width='100%'>
    <Skeleton height={20} width={20} />
    <Skeleton height={20} containerClassName='w-full' />
  </Flex>
)
