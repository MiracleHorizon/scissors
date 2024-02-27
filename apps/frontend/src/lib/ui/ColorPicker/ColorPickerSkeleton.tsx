import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import type { FC } from 'react'

export const ColorPickerSkeleton: FC<Props> = ({ withLabel = true }) => (
  <Flex direction='column' gap='1' width='100%'>
    {withLabel && <Skeleton height={20} width={111} />}
    <Skeleton height={32} width={111} />
  </Flex>
)

interface Props {
  withLabel?: boolean
}
