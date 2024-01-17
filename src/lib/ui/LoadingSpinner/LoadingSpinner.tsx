import { Box, type MarginProps } from '@radix-ui/themes'
import type { FC } from 'react'

import type { Size } from '@lib/theme'
import styles from './LoadingSpinner.module.css'

export const LoadingSpinner: FC<Props> = ({ width = '6', height = '6', ...marginProps }) => (
  <Box {...marginProps} width={width} height={height} className={styles.spinner} />
)

interface Props extends MarginProps {
  width?: Size
  height?: Size
}
