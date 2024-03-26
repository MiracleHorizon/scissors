import { Box, Flex } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import { LayoutHeader } from './LayoutHeader'
import { TanStackQueryProvider } from '@lib/tanstack-query'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Flex align='center' direction='column'>
    <Box width='100%' pt='8'>
      <LayoutHeader />
      <TanStackQueryProvider>{children}</TanStackQueryProvider>
    </Box>
  </Flex>
)
