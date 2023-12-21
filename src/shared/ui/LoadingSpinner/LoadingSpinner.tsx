import { Box, type MarginProps } from '@radix-ui/themes'

import type { Size } from '@libs/radix'
import styles from './LoadingSpinner.module.css'

export function LoadingSpinner({ width, height, ...marginProps }: Props) {
  return (
    <Box {...marginProps} width={width ?? '6'} height={height ?? '6'} className={styles.spinner} />
  )
}

interface Props extends MarginProps {
  width?: Size
  height?: Size
}
