import { type FC, useEffect, useState } from 'react'
import { Button, DropdownMenu } from '@radix-ui/themes'

import { ToolbarDropdownMenuContent } from './ToolbarDropdownMenuContent'
import { ChevronDownIcon } from '@ui/icons/ChevronDownIcon'
import { TOUR_STEP } from '@lib/tour'
import { BREAKPOINTS_MAX_WIDTH } from '@lib/theme'

const ToolbarDropdownMenuTrigger: FC<TriggerProps> = props => (
  <DropdownMenu.Trigger data-tourstep={TOUR_STEP.TOOLBAR_ACTIONS} {...props}>
    <Button variant='soft' radius='large' color='gray'>
      Menu
      <ChevronDownIcon width='18px' height='18px' color='var(--gray-a11)' />
    </Button>
  </DropdownMenu.Trigger>
)

interface TriggerProps {
  onClick: VoidFunction
}

export function ToolbarDropdownMenu() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    const handleWindowResize = () => {
      if (!open) return

      const breakpoint = BREAKPOINTS_MAX_WIDTH.xs
      const isMobile = matchMedia(`(max-width: ${breakpoint}px)`).matches

      if (!isMobile) {
        handleClose()
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [open])

  return (
    <DropdownMenu.Root open={open}>
      <ToolbarDropdownMenuTrigger onClick={handleOpen} />
      <ToolbarDropdownMenuContent onClose={handleClose} />
    </DropdownMenu.Root>
  )
}
