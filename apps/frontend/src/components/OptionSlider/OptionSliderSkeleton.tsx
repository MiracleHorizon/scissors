import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import type { FC } from 'react'

export const OptionSliderSkeleton: FC<Props> = ({ withLabel = false, withInput = false }) => (
  <Flex direction='column' width='100%' gap='1'>
    {withLabel && <Skeleton style={{ marginBottom: 'var(--space-1)' }} height={18} width={100} />}
    {withInput ? (
      <Flex align='start' gap='3' width='100%'>
        <Skeleton height={32} containerClassName='w-full' />
        <Skeleton height={32} width={68} />
      </Flex>
    ) : (
      <Skeleton height={40} containerClassName='w-full' />
    )}
  </Flex>
)

interface Props {
  withLabel?: boolean
  withInput?: boolean
}
