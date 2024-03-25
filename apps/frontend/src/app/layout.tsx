import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Flex, Theme as RadixTheme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import 'yet-another-react-lightbox/styles.css'

import { Layout } from '@layouts/default'
import { getThemeAppearance } from '@lib/theme'
import {
  pathForSocial,
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
    siteName: SITE_TITLE,
    images: [
      {
        url: pathForSocial('og-image-share.png'),
        width: 1958,
        height: 1044,
        type: 'image/png'
      }
    ],
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

export default async function RootLayout({ children }: PropsWithChildren) {
  const { theme, themeColor } = await getThemeAppearance()

  return (
    <html lang='en' className={theme}>
      <body className={geistSans.variable}>
        <RadixTheme accentColor={themeColor} appearance={theme}>
          <CookieConsentBanner />

          <Flex align='center' justify='start' direction='column'>
            <Layout theme={theme} themeColor={themeColor}>
              {children}
            </Layout>
          </Flex>
        </RadixTheme>

        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </body>
    </html>
  )
}
