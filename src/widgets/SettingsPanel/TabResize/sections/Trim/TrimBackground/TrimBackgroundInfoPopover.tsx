import { Box, Code, Popover, Text } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { ButtonInfo } from '@ui/ButtonInfo'

const contentStyle: CSSProperties = {
  maxWidth: '300px',
  padding: 'var(--space-2)'
}

export const TrimBackgroundInfoPopover = () => (
  <Popover.Root>
    <Popover.Trigger>
      <ButtonInfo radius='full' />
    </Popover.Trigger>

    <Popover.Content size='1' style={contentStyle} align='center' side='top'>
      <Box>
        <Text as='p' size='2'>
          The default background (trim color) value is set as <Code variant='ghost'>top-left</Code>{' '}
          pixel
        </Text>
      </Box>
    </Popover.Content>
  </Popover.Root>
)
