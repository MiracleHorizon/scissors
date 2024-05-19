import { Flex, Heading, Separator } from '@radix-ui/themes'

import { ThemeControl } from '@components/theme/theme-control'
import { ThemeColorGrid } from '@components/theme/theme-color-grid'

export const AppearancePopoverContent = () => (
  <Flex direction='column' align='start' gap='3' width='170px'>
    <ThemeControl />

    <Separator size='4' />

    <Flex direction='column' width='100%'>
      <Heading mb='3' size='2' color='gray' weight='medium'>
        Theme Color
      </Heading>
      <ThemeColorGrid />
    </Flex>
  </Flex>
)
