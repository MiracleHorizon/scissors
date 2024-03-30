'use client'

import dynamic from 'next/dynamic'
import { type CSSProperties, useState } from 'react'
import { IconButton, Popover, Skeleton } from '@radix-ui/themes'

import { MixerHorizontalIcon } from '@scissors/react-icons/MixerHorizontalIcon'

import { useSyncThemeAppearance } from '@hooks/useSyncThemeAppearance'

const AppearancePopoverContent = dynamic(
  () => import('./AppearancePopoverContent').then(mod => mod.AppearancePopoverContent),
  {
    ssr: false,
    loading: () => <Skeleton width='170px' height='217px' />
  }
)

const triggerStyle: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

const AppearancePopover = () => {
  const [isOpen, setIsOpen] = useState(false)

  useSyncThemeAppearance()

  return (
    <Popover.Root open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <Popover.Trigger>
        <IconButton color='gray' radius='large' variant='ghost' style={triggerStyle}>
          <MixerHorizontalIcon
            color='gray'
            width='16px'
            height='16px'
            label='appearance settings'
          />
        </IconButton>
      </Popover.Trigger>

      <Popover.Content sideOffset={3}>{isOpen && <AppearancePopoverContent />}</Popover.Content>
    </Popover.Root>
  )
}

export default AppearancePopover
