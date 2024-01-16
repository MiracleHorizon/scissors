import { IconButton } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import styles from './ExtendToolbarButton.module.css'

export const ExtendToolbarButton: FC<Props> = ({ children, onClick }) => (
  <IconButton variant='outline' radius='large' className={styles.root} onClick={onClick}>
    {children}
  </IconButton>
)

type Props = PropsWithChildren<{
  onClick: VoidFunction
}>
