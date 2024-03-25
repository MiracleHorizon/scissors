'use client'

import { Flex, IconButton, Popover, Separator } from '@radix-ui/themes'
import type { FC } from 'react'

import { ThemeColorGrid } from '@components/theme/ThemeColorGrid'
import { AppearancePopoverTitle } from './AppearancePopoverTitle'
import { ButtonToggleTheme } from '@components/theme/ButtonToggleTheme'
import { MixerHorizontalIcon } from '@ui/icons/MixerHorizontalIcon'
import { useSyncThemeAppearance } from '@hooks/useSyncThemeAppearance'
import type { ThemeProps } from '@lib/theme'

const AppearancePopover: FC<ThemeProps> = ({ theme, themeColor }) => {
  useSyncThemeAppearance({
    theme,
    themeColor
  })

  return (
    <Popover.Root>
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
        <Flex direction='column' align='start' gap='3' width='170px'>
          <Flex align='center' justify='between' width='100%'>
            <AppearancePopoverTitle title='Theme' />
            <ButtonToggleTheme theme={theme} />
          </Flex>

          <Separator size='4' />

          <Flex direction='column' width='100%'>
            <AppearancePopoverTitle title='Theme Color' mb='3' />
            <ThemeColorGrid themeColor={themeColor} />
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

export default AppearancePopover
