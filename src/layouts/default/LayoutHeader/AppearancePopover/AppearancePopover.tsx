'use client'

import { Flex, IconButton, Popover, Separator } from '@radix-ui/themes'
import type { CSSProperties, FC } from 'react'

import { ToggleTheme } from './ToggleTheme'
import { ThemeColorGrid } from './ThemeColorGrid'
import { MixerHorizontalIcon } from '@ui/icons/MixerHorizontalIcon'
import { useSyncThemeAppearance } from '@hooks/useSyncThemeAppearance'
import { type ThemeProps } from '@lib/theme'

const contentStyle: CSSProperties = {
  width: '180px'
}

const AppearancePopover: FC<ThemeProps> = ({ theme, themeColor }) => {
  useSyncThemeAppearance({
    theme,
    themeColor
  })

  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton size='3' color='gray' variant='ghost' radius='large'>
          <MixerHorizontalIcon
            color='gray'
            width='16px'
            height='16px'
            label='appearance settings'
          />
        </IconButton>
      </Popover.Trigger>

      <Popover.Content style={contentStyle} sideOffset={3}>
        <Flex direction='column' align='start' gap='3' width='100%'>
          <ToggleTheme theme={theme} />
          <Separator size='4' />
          <ThemeColorGrid themeColor={themeColor} />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

export default AppearancePopover
