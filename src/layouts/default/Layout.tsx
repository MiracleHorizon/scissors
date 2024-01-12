import { Box } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import { LayoutHeader } from './LayoutHeader'
import { TanStackQueryProvider } from '@lib/tanstack-query'
import type { ThemeProps } from '@lib/theme'

export const Layout: FC<PropsWithChildren<ThemeProps>> = ({ children, ...props }) => (
  <Box width='100%' pt='8'>
    <LayoutHeader {...props} />
    <TanStackQueryProvider>{children}</TanStackQueryProvider>
  </Box>
)
