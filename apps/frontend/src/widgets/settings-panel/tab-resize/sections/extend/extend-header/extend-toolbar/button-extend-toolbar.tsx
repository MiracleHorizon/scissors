import { IconButton } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import styles from './button-extend-toolbar.module.css'

export const ButtonExtendToolbar: FC<Props> = ({ children, onClick }) => (
  <IconButton variant='outline' color='gray' radius='large' className={styles.root} onClick={onClick}>
    {children}
  </IconButton>
)

type Props = PropsWithChildren<{
  onClick: VoidFunction
}>
