import { IconButton, Skeleton } from '@radix-ui/themes'

import type { ButtonProps } from '@lib/theme'

const size = '20px'
export const IconButtonGhostSkeleton = ({ radius = 'large' }: Pick<ButtonProps, 'radius'>) => (
  <Skeleton width={size} height={size}>
    <IconButton variant='ghost' radius={radius} />
  </Skeleton>
)
