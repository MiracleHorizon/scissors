import { Box, type MarginProps } from '@radix-ui/themes'

import type { Size } from '@lib/theme'
import styles from './LoadingSpinner.module.css'

export function LoadingSpinner({ width = '6', height = '6', ...marginProps }: Props) {
  return <Box {...marginProps} width={width} height={height} className={styles.spinner} />
}

interface Props extends MarginProps {
  width?: Size
  height?: Size
}
