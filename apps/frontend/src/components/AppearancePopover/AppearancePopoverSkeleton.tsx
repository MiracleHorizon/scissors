import { IconButton, Skeleton } from '@radix-ui/themes'

const size = '32px'
export const AppearancePopoverSkeleton = () => (
  <Skeleton width={size} height={size} m='-8px'>
    <IconButton radius='large' />
  </Skeleton>
)
