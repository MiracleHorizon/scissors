import { DropdownMenu, IconButton } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { PaletteIcon } from '@scissors/react-icons/PaletteIcon'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ThemeColorMenuTrigger.module.css'

export const ThemeColorMenuTrigger = ({ className }: ClassNameProps) => (
  <DropdownMenu.Trigger>
    <IconButton
      color='gray'
      radius='large'
      variant='ghost'
      data-cy='theme-color-menu-trigger'
      className={clsx(styles.root, className)}
    >
      <PaletteIcon width='20px' height='20px' />
    </IconButton>
  </DropdownMenu.Trigger>
)
