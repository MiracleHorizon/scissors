import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

export function UploadedFileSkeleton() {
  return (
    <Flex direction='column' gap='3' width='100%'>
      <Skeleton height={64} width='100%' />
      <Skeleton height={300} width='100%' />
    </Flex>
  )
}
