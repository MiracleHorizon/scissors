import { Flex, Skeleton } from '@radix-ui/themes'
import type { FC } from 'react'

export const ColorPickerSkeleton: FC<Props> = ({ withLabel = true }) => (
  <Flex direction='column' gap='1' width='100%'>
    {withLabel && <Skeleton height='20px' width='111px' />}
    <Skeleton height='32px' width='111px' />
  </Flex>
)

interface Props {
  withLabel?: boolean
}
