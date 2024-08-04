import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

import { Layout } from '@components/Layout'
import { DEFAULT_THEME, getThemeColorServerCookie, THEME_STORAGE_KEY } from '@lib/theme'
import { geistSans } from './fonts'
import './globals.css'

const CookieConsentBanner = dynamic(() => import('@components/CookieConsentBanner'), {
  ssr: false
})

export { metadata } from '@site/seo'

const RootLayout = async ({ children }: PropsWithChildren) => {
  const themeColor = await getThemeColorServerCookie()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={geistSans.variable}>
        <ThemeProvider
          attribute='class'
          defaultTheme={DEFAULT_THEME}
          storageKey={THEME_STORAGE_KEY}
          disableTransitionOnChange
        >
          <Theme accentColor={themeColor}>
            <CookieConsentBanner />

            <Layout>{children}</Layout>
          </Theme>
        </ThemeProvider>

        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </body>
    </html>
  )
}

export default RootLayout
