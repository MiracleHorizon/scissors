import Skeleton from 'react-loading-skeleton'

import styles from './AppearancePopoverSkeleton.module.css'

const size = 32
export const AppearancePopoverSkeleton = () => (
  <Skeleton inline count={1} width={size} height={size} className={styles.root} />
)
