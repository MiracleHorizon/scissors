import { IconButton } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import styles from './ExtendToolbarButton.module.css'

type Props = PropsWithChildren<{
  onClick: VoidFunction
}>

export const ExtendToolbarButton: FC<Props> = ({ children, onClick }) => (
  <IconButton
    variant='outline'
    color='gray'
    radius='large'
    className={styles.root}
    onClick={onClick}
  >
    {children}
  </IconButton>
)
