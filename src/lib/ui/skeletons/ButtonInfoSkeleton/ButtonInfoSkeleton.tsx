import Skeleton from 'react-loading-skeleton'

import styles from './ButtonInfoSkeleton.module.css'

export function ButtonInfoSkeleton() {
  return <Skeleton width={26} height={26} className={styles.root} />
}
