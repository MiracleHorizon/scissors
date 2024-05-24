import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Layout } from '@components/Layout'
import {
  pathForSocial,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_KEYWORDS,
  SITE_TITLE
} from '@site/config'
import { DEFAULT_THEME, DEFAULT_THEME_COLOR, getThemeColorCookie, THEME_LS_KEY } from '@lib/theme'
import { geistSans } from './fonts'
import './globals.css'

const CookieConsentBanner = dynamic(() => import('@components/CookieConsentBanner'), {
  ssr: false
})

const domainURL = new URL(SITE_DOMAIN)
export const metadata: Metadata = {
  metadataBase: domainURL,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: pathForSocial('og-image-share.png'),
        width: 1958,
        height: 1044,
        type: 'image/png'
      }
    ],
    url: domainURL,
    type: 'website'
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    card: 'summary_large_image',
    images: [
      {
        url: pathForSocial('og-image-share.png'),
        width: 1958,
        height: 1044,
        type: 'image/png'
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  },
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicons/dark.png',
      type: 'image/png',
      sizes: '180x180',
      media: '(prefers-color-scheme: dark)'
    },
    {
      rel: 'icon',
      url: '/favicons/light.png',
      type: 'image/png',
      sizes: '180x180',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      url: '/android-chrome-192x192.png',
      type: 'image/png',
      sizes: '192x192'
    },
    {
      rel: 'icon',
      url: '/android-chrome-512x512.png',
      type: 'image/png',
      sizes: '512x512'
    }
  ],
  other: {
    'darkreader-lock': 'true'
  }
}

const RootLayout = async ({ children }: PropsWithChildren) => {
  const themeColor = await getThemeColorCookie()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={geistSans.variable}>
        <ThemeProvider
          attribute='class'
          defaultTheme={DEFAULT_THEME}
          storageKey={THEME_LS_KEY}
          disableTransitionOnChange
        >
          <Theme accentColor={themeColor ?? DEFAULT_THEME_COLOR}>
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
