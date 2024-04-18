import { Flex, Skeleton } from '@radix-ui/themes'
import type { FC } from 'react'

export const SliderSkeleton: FC<Props> = ({ withLabel = false, withInput = false }) => (
  <Flex direction='column' width='100%' gap='1'>
    {withLabel && <Skeleton height='18px' width='100px' mb='1' />}

    {withInput ? (
      <Flex align='start' gap='3' width='100%'>
        <Skeleton height='32px' width='100%' />
        <Skeleton height='32px' width='68px' />
      </Flex>
    ) : (
      <Skeleton height='40px' width='100%' />
    )}
  </Flex>
)

interface Props {
  withLabel?: boolean
  withInput?: boolean
}
