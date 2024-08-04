'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Popover, Skeleton } from '@radix-ui/themes'

import { AppearancePopoverTrigger } from './AppearancePopoverTrigger'

const AppearancePopoverContent = dynamic(
  () => import('./AppearancePopoverContent').then(mod => mod.AppearancePopoverContent),
  {
    ssr: false,
    loading: () => <Skeleton width='170px' height='217px' />
  }
)

const AppearancePopover = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover.Root open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <AppearancePopoverTrigger />

      <Popover.Content data-cy='appearance-popover-content' sideOffset={3}>
        {isOpen && <AppearancePopoverContent />}
      </Popover.Content>
    </Popover.Root>
  )
}

/*
 * Default export is required to import a client component inside a server component using next/dynamic.
 */
export default AppearancePopover
