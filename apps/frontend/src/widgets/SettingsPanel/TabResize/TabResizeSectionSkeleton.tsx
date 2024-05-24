import { Flex, Skeleton } from '@radix-ui/themes'

interface Props {
  height: string
}

export const TabResizeSectionSkeleton = ({ height }: Props) => (
  <Flex width='100%' pr='3'>
    <Skeleton width='100%' height={height} />
  </Flex>
)
