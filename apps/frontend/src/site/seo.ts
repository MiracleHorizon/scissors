import type { Metadata } from 'next'

import { pathForSocial, SITE_DESCRIPTION, SITE_DOMAIN, SITE_KEYWORDS, SITE_TITLE } from './config'

const domainURL = new URL(SITE_DOMAIN)

const icons: Metadata['icons'] = [
  // {
  //   url: '/favicon.svg',
  //   type: 'image/svg+xml'
  // },
  {
    url: '/favicons/dark.png',
    type: 'image/png',
    sizes: '180x180',
    media: '(prefers-color-scheme: dark)'
  },
  {
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
    url: '/android-chrome-192x192.png',
    type: 'image/png',
    sizes: '192x192'
  },
  {
    url: '/android-chrome-512x512.png',
    type: 'image/png',
    sizes: '512x512'
  }
]

const openGraph: Metadata['openGraph'] = {
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
}

const twitter: Metadata['twitter'] = {
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
}

export const metadata: Metadata = {
  metadataBase: domainURL,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  robots: {
    index: true,
    follow: true
  },
  openGraph,
  twitter,
  icons,
  manifest: '/manifest.json',
  other: {
    'darkreader-lock': 'true'
  }
}
