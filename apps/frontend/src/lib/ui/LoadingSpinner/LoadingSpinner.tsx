import { clsx } from 'clsx/lite'
import { Box } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

import type { Size } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './LoadingSpinner.module.css'

export const LoadingSpinner: FC<Props> = ({
  width = '6',
  height = '6',
  className,
  ...marginProps
}) => (
  <Box {...marginProps} width={width} height={height} className={clsx(styles.spinner, className)} />
)

interface Props extends MarginProps, ClassNameProps {
  width?: Size
  height?: Size
}
