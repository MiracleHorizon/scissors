import dynamic from 'next/dynamic'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Flex, Theme as RadixTheme, ThemePanel } from '@radix-ui/themes'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import 'yet-another-react-lightbox/styles.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { Layout } from '@layouts/default'
import { getThemeAppearance } from '@lib/theme'
import {
  isDevelopment,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_KEYWORDS,
  SITE_TITLE
} from '@site/config'
import { geistSans } from './fonts'
import './globals.css'

const CookieConsentBanner = dynamic(() => import('@components/CookieConsentBanner'), {
  ssr: false
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website'
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        url: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        url: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        url: '/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png',
        url: '/android-chrome-512x512.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon-180x180.png'
      }
    ]
  }
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const { theme, themeColor } = await getThemeAppearance()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={geistSans.variable}>
        <RadixTheme accentColor={themeColor} appearance={theme}>
          {isDevelopment && <ThemePanel defaultOpen={false} />}

          <CookieConsentBanner />

          <Flex align='center' justify='start' direction='column'>
            <Layout theme={theme} themeColor={themeColor}>
              {children}
            </Layout>
          </Flex>
        </RadixTheme>

        <SpeedInsights />
      </body>
    </html>
  )
}
