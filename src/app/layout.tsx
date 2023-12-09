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
  icons: {
    icon: '/favicon.ico'
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
