import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import styles from './toolbar-mobile-menu-item.module.css'

export const ToolbarMobileMenuItem = forwardRef<HTMLLIElement, Props>(
  ({ icon, label, className, ...props }, ref) => (
    <li ref={ref} className={clsx(styles.root, className)} {...props}>
      {icon}
      <Text truncate>{label}</Text>
    </li>
  )
)

ToolbarMobileMenuItem.displayName = 'ToolbarMobileMenuItem'

type Props = HTMLAttributes<HTMLLIElement> & {
  label: string
  icon?: ReactNode
}
