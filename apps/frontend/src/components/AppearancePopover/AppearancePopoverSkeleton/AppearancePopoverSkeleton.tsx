import { Skeleton } from '@radix-ui/themes'

import styles from './AppearancePopoverSkeleton.module.css'

const size = '32px'
export const AppearancePopoverSkeleton = () => (
  <Skeleton width={size} height={size} className={styles.root} />
)
