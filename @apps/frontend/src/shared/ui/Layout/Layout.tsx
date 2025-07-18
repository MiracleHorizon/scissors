import { Box, Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import { LayoutHeader } from '@/widgets/LayoutHeader'

const CookieConsentBanner = lazy(() =>
  import('@/shared/ui').then(module => ({
    default: module.CookieConsentBanner
  }))
)

export const Layout = () => (
  <Flex align='center' direction='column' className='geist-font'>
    <Box width='100%' pt='8'>
      <Suspense>
        <CookieConsentBanner />
      </Suspense>

      <LayoutHeader />
      <Outlet />
    </Box>
  </Flex>
)
