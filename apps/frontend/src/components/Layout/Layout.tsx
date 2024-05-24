import { Box, Flex } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { LayoutHeader } from './LayoutHeader'

export const Layout = ({ children }: PropsWithChildren) => (
  <Flex align='center' direction='column'>
    <Box width='100%' pt='8'>
      <LayoutHeader />
      {children}
    </Box>
  </Flex>
)
