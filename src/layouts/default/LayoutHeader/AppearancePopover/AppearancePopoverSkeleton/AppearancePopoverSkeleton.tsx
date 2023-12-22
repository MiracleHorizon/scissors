import Skeleton from 'react-loading-skeleton'

import styles from './AppearancePopoverSkeleton.module.css'

export function AppearancePopoverSkeleton() {
  return <Skeleton inline count={1} width={32} height={32} className={styles.root} />
}
