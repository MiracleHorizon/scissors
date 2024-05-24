import { forwardRef, type HTMLAttributes, type PropsWithChildren, type ReactNode } from 'react'
import { Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import styles from './ToolbarMobileMenuItem.module.css'

type Props = HTMLAttributes<HTMLLIElement> &
  PropsWithChildren<{
    label: string
    icon?: ReactNode
  }>

export const ToolbarMobileMenuItem = forwardRef<HTMLLIElement, Props>(
  ({ children, icon, label, className, ...props }, ref) => (
    <li ref={ref} className={clsx(styles.root, className)} {...props}>
      {icon}
      <Text truncate>{label}</Text>
      {children}
    </li>
  )
)

ToolbarMobileMenuItem.displayName = 'ToolbarMobileMenuItem'
