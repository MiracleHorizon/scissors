import Skeleton from 'react-loading-skeleton'

import styles from './SettingsPopoverSkeleton.module.css'

export function SettingsPopoverSkeleton() {
  return <Skeleton inline count={1} width={32} height={32} className={styles.root} />
}
