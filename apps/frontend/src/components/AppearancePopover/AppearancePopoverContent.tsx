import { Flex, Separator } from '@radix-ui/themes'

import ButtonToggleTheme from '@components/theme/ButtonToggleTheme'
import { ThemeColorGrid } from '@components/theme/ThemeColorGrid'
import { AppearancePopoverTitle } from './AppearancePopoverTitle'

export const AppearancePopoverContent = () => (
  <Flex direction='column' align='start' gap='3' width='170px'>
    <Flex align='center' justify='between' width='100%'>
      <AppearancePopoverTitle title='Theme' />
      <ButtonToggleTheme />
    </Flex>

    <Separator size='4' />

    <Flex direction='column' width='100%'>
      <AppearancePopoverTitle title='Theme Color' mb='3' />
      <ThemeColorGrid />
    </Flex>
  </Flex>
)
