import { useState } from 'react'
import { DropdownMenu } from '@radix-ui/themes'

import { ThemeColorMenuTrigger } from './ThemeColorMenuTrigger'
import { ThemeColorMenuContent } from './ThemeColorMenuContent'
import styles from './ThemeColorMenu.module.css'

interface Props {
  triggerClassName?: string
  contentClassName?: string
}

export const ThemeColorMenu = ({ triggerClassName, contentClassName }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu.Root open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <ThemeColorMenuTrigger className={triggerClassName} />

      <DropdownMenu.Content
        sideOffset={3}
        data-cy='theme-color-menu-content'
        className={styles.content}
      >
        {isOpen && <ThemeColorMenuContent className={contentClassName} />}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
