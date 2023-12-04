import { Box, type MarginProps } from '@radix-ui/themes'

import styles from './LoadingSpinner.module.css'

export function LoadingSpinner(props: MarginProps) {
  return <Box {...props} width='6' height='6' className={styles.spinner} />
}
