import { Button, DropdownMenu, Tabs } from '@radix-ui/themes'
import { clsx } from 'clsx'
import MediaQuery from 'react-responsive'
import { type FC, useState } from 'react'

import { SymbolIcon } from '@ui/icons/SymbolIcon'
import { DimensionsIcon } from '@ui/icons/DimensionsIcon'
import { MetadataIcon } from '@ui/icons/MetadataIcon'
import { ChevronDownIcon } from '@ui/icons/ChevronDownIcon'
import { TOUR_STEP } from '@lib/tour'
import { TOOLBAR_TAB } from '@stores/tabs'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ToolbarTabMenu.module.css'

const tabs = [
  {
    label: 'Convert',
    value: TOOLBAR_TAB.CONVERT,
    icon: <SymbolIcon />
  },
  {
    label: 'Resize',
    value: TOOLBAR_TAB.RESIZE,
    icon: <DimensionsIcon width='16px' height='16px' />
  },
  {
    label: 'Metadata',
    value: TOOLBAR_TAB.METADATA,
    icon: <MetadataIcon width='17px' height='17px' />
  }
]

export const ToolbarTabMenu = () => (
  <>
    <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.xs}>
      <ToolbarTabList />
    </MediaQuery>

    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>
      <ToolbarTabDropdownMenu />
    </MediaQuery>
  </>
)

export const ToolbarTabList: FC<ToolbarTabListProps> = ({ className, onClick }) => (
  <Tabs.List data-tourstep={TOUR_STEP.TOOLBAR_TAB_LIST} className={clsx(styles.root, className)}>
    {tabs.map(({ label, value, icon }) => (
      <Tabs.Trigger key={value} value={value} onClick={onClick}>
        <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>{icon}</MediaQuery>

        {label}
      </Tabs.Trigger>
    ))}
  </Tabs.List>
)

interface ToolbarTabListProps extends ClassNameProps {
  onClick?: VoidFunction
}

const ToolbarTabDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger>
        <Button radius='large' variant='soft' color='gray' onClick={handleOpen}>
          Tabs
          <ChevronDownIcon width='18px' height='18px' color='var(--gray-a11)' />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content size='1'>
        <ToolbarTabList className={styles.mobile} onClick={handleClose} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
