import { Box, Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import { LayoutHeader } from './LayoutHeader'

const CookieConsentBanner = lazy(() => import('@components/CookieConsentBanner'))

export const Layout = () => (
  <Flex align='center' direction='column'>
    <Box width='100%' pt='8'>
      <Suspense>
        <CookieConsentBanner />
      </Suspense>

      <Suspense>
        <LayoutHeader />
        <Outlet />
      </Suspense>
    </Box>
  </Flex>
)
