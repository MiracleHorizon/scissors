import { Skeleton } from '@radix-ui/themes'
import { clsx } from 'clsx'

import navStyles from '../DocsNavigation.module.css'
import styles from './DocsNavigationSkeleton.module.css'

export const DocsNavigationSkeleton = () => (
  <Skeleton height='220px' className={clsx(navStyles.root, styles.root)} />
)
