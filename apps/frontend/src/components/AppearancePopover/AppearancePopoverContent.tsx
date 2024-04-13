import { Flex, Separator } from '@radix-ui/themes'

import { ThemeControl } from '@components/theme/ThemeControl'
import { ThemeColorGrid } from '@components/theme/ThemeColorGrid'
import { AppearancePopoverTitle } from './AppearancePopoverTitle'

export const AppearancePopoverContent = () => (
  <Flex direction='column' align='start' gap='3' width='170px'>
    <ThemeControl />

    <Separator size='4' />

    <Flex direction='column' width='100%'>
      <AppearancePopoverTitle title='Theme Color' mb='3' />
      <ThemeColorGrid />
    </Flex>
  </Flex>
)
