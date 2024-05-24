import { Flex, Skeleton } from '@radix-ui/themes'
import type { FC } from 'react'

interface Props {
  withLabel?: boolean
}

export const ColorFieldSkeleton: FC<Props> = ({ withLabel = true }) => (
  <Flex direction='column' gap='1' width='100%'>
    {withLabel && <Skeleton height='20px' width='120px' />}
    <Skeleton height='32px' width='120px' />
  </Flex>
)
