import { Box, Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

import { LayoutHeader } from './LayoutHeader'

export const Layout = () => (
  <Flex align='center' direction='column'>
    <Box width='100%' pt='8'>
      <Suspense>
        <LayoutHeader />
        <Outlet />
      </Suspense>
    </Box>
  </Flex>
)
