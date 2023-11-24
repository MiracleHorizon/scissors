import { Box, Flex, Theme as RadixTheme } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { LayoutHeader } from '@components/LayoutHeader'
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
          <Flex align='center' justify='start' direction='column'>
            <Box width='100%' pt='8'>
              <LayoutHeader theme={theme} themeColor={themeColor} />
              {children}
            </Box>
          </Flex>
        </RadixTheme>
      </body>
    </html>
  )
}
