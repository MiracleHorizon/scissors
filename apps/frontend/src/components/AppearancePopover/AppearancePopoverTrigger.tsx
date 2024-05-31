import { IconButton, Popover } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { MixerHorizontalIcon } from '@scissors/react-icons/MixerHorizontalIcon'

const style: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

export const AppearancePopoverTrigger = () => (
  <Popover.Trigger>
    <IconButton
      color='gray'
      radius='large'
      variant='ghost'
      style={style}
      data-cy='appearance-popover-trigger'
    >
      <MixerHorizontalIcon color='gray' width='16px' height='16px' label='appearance settings' />
    </IconButton>
  </Popover.Trigger>
)
