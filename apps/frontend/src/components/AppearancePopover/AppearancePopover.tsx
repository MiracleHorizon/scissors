'use client'

import dynamic from 'next/dynamic'
import { type FC, useState } from 'react'
import { IconButton, Popover, Skeleton } from '@radix-ui/themes'

import { MixerHorizontalIcon } from '@ui/icons/MixerHorizontalIcon'
import { useSyncThemeAppearance } from '@hooks/useSyncThemeAppearance'
import type { ThemeProps } from '@lib/theme'

const AppearancePopoverContent = dynamic(
  () => import('./AppearancePopoverContent').then(mod => mod.AppearancePopoverContent),
  {
    ssr: false,
    loading: () => <Skeleton width='170px' height='217px' />
  }
)

const AppearancePopover: FC<ThemeProps> = props => {
  const [isOpen, setIsOpen] = useState(false)

  useSyncThemeAppearance(props)

  return (
    <Popover.Root open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <Popover.Trigger>
        <IconButton size='3' color='gray' variant='ghost'>
          <MixerHorizontalIcon
            color='gray'
            width='16px'
            height='16px'
            label='appearance settings'
          />
        </IconButton>
      </Popover.Trigger>

      <Popover.Content sideOffset={3}>
        {isOpen && <AppearancePopoverContent {...props} />}
      </Popover.Content>
    </Popover.Root>
  )
}

export default AppearancePopover
