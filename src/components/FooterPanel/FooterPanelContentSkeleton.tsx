import { Flex, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

export function FooterPanelContentSkeleton() {
  return (
    <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
      <Skeleton height={40} width={140} />
      <Separator orientation='vertical' size='2' />
      <Skeleton height={40} width={123} />
    </Flex>
  )
}
