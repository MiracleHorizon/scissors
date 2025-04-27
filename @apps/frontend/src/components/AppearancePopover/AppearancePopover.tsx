import { lazy, Suspense, useState } from 'react'
import { Popover, Skeleton } from '@radix-ui/themes'

import { AppearancePopoverTrigger } from './AppearancePopoverTrigger'

const AppearancePopoverContent = lazy(() =>
  import('./AppearancePopoverContent').then(mod => ({ default: mod.AppearancePopoverContent }))
)

const AppearancePopover = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover.Root open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <AppearancePopoverTrigger />

      <Popover.Content data-cy='appearance-popover-content' sideOffset={3}>
        <Suspense fallback={<Skeleton width='170px' height='217px' />}>
          {isOpen && <AppearancePopoverContent />}
        </Suspense>
      </Popover.Content>
    </Popover.Root>
  )
}

export default AppearancePopover
