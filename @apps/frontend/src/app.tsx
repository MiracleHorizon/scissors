import { lazy, Suspense } from 'react'
import { RouterProvider } from 'react-router/dom'
import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'

import { DEFAULT_THEME, getThemeColorCookie, THEME_STORAGE_KEY } from '@lib/theme'
import { createRouter } from './router'

const CookieConsentBanner = lazy(() => import('@components/CookieConsentBanner'))

export const App = () => {
  const themeColor = getThemeColorCookie()

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme={DEFAULT_THEME}
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
    >
      <Theme accentColor={themeColor}>
        <Suspense>
          <CookieConsentBanner />
        </Suspense>

        <RouterProvider router={createRouter()} />
      </Theme>
    </ThemeProvider>
  )
}
