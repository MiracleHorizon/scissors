import { useState } from 'react'
import { Button, DropdownMenu } from '@radix-ui/themes'

import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'

import { ToolbarTabList } from './ToolbarTabList'
import { TOUR_STEP } from '@lib/tour'
import styles from './ToolbarTabDropdown.module.css'

export function ToolbarTabDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger data-tourstep={TOUR_STEP.TOOLBAR_TAB_LIST}>
        <Button radius='large' variant='soft' color='gray' onClick={handleOpen}>
          Tabs
          <ChevronDownIcon width='18px' height='18px' color='var(--gray-a11)' />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content size='1'>
        <ToolbarTabList className={styles.tabs} onClick={handleClose} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
