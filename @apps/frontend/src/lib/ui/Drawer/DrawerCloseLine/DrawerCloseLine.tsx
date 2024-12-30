import { clsx } from 'clsx'

import styles from './DrawerCloseLine.module.css'

interface Props {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export const DrawerCloseLine = ({ className, orientation = 'horizontal' }: Props) => (
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
