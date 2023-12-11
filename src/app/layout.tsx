import { Flex, Theme as RadixTheme, ThemePanel } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import 'yet-another-react-lightbox/styles.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { Layout } from '@components/Layout'
import { getThemeAppearance } from '@shared/theme'
import './globals.css'

export const metadata: Metadata = {
  title: 'Image Converter',
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
        sizes: '60x60',
        url: '/apple-touch-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        url: '/apple-touch-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        url: '/apple-touch-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        url: '/apple-touch-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon-180x180.png'
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbads'
      }
    ]
  }
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default async function RootLayout({ children }: PropsWithChildren) {
  const { theme, themeColor } = await getThemeAppearance()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.variable}>
        <RadixTheme accentColor={themeColor} appearance={theme}>
          {process.env.NODE_ENV === 'development' && <ThemePanel defaultOpen={false} />}
          <Flex align='center' justify='start' direction='column'>
            <Layout theme={theme} themeColor={themeColor}>
              {children}
            </Layout>
          </Flex>
        </RadixTheme>
      </body>
    </html>
  )
}
