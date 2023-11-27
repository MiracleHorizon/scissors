import { Box } from '@radix-ui/themes'

import type { MarginProps } from '@libs/radix'
import styles from './LoadingSpinner.module.css'

export function LoadingSpinner(props: MarginProps) {
  return <Box {...props} width='5' height='5' className={styles.spinner} />
}
