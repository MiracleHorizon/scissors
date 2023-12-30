'use client'

import { Flex, IconButton, Popover, Separator } from '@radix-ui/themes'

import { ToggleTheme } from './ToggleTheme'
import { ThemeColorGrid } from './ThemeColorGrid'
import { MixerHorizontalIcon } from '@ui/icons/MixerHorizontalIcon'
import type { ThemeProps } from '@lib/theme'

export function AppearancePopover({ theme, themeColor }: ThemeProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton size='3' color='gray' variant='ghost' radius='large'>
          <MixerHorizontalIcon color='gray' width='16px' height='16px' />
        </IconButton>
      </Popover.Trigger>

      <Popover.Content style={{ width: '180px' }} sideOffset={3}>
        <Flex direction='column' align='start' gap='3' width='100%'>
          <ToggleTheme theme={theme} />
          <Separator size='4' />
          <ThemeColorGrid themeColor={themeColor} />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}
