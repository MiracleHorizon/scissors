import { clsx } from 'clsx'
import type { FC } from 'react'

import styles from './DrawerCloseLine.module.css'

interface Props {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export const DrawerCloseLine: FC<Props> = ({ className, orientation = 'horizontal' }) => (
  <div
    className={clsx(
      styles.root,
      {
        [styles.horizontal]: orientation === 'horizontal',
        [styles.vertical]: orientation === 'vertical'
      },
      className
    )}
  />
)
