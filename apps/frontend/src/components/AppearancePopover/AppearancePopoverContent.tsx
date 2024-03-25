import { Flex, Separator } from '@radix-ui/themes'
import type { FC } from 'react'

import { AppearancePopoverTitle } from './AppearancePopoverTitle'
import { ButtonToggleTheme } from '@components/theme/ButtonToggleTheme'
import { ThemeColorGrid } from '@components/theme/ThemeColorGrid'
import type { ThemeProps } from '@lib/theme'

export const AppearancePopoverContent: FC<ThemeProps> = ({ theme, themeColor }) => (
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
)
