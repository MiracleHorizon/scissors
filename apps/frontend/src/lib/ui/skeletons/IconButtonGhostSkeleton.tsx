import { IconButton, Skeleton } from '@radix-ui/themes'
import type { FC } from 'react'

import type { ButtonProps } from '@lib/theme'

const size = '20px'
export const IconButtonGhostSkeleton: FC<Pick<ButtonProps, 'radius'>> = ({ radius = 'large' }) => (
  <Skeleton width={size} height={size}>
    <IconButton variant='ghost' radius={radius} />
  </Skeleton>
)
