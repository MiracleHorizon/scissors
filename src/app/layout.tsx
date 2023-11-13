import { Theme } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
