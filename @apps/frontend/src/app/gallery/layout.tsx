import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery'
}

const GalleryLayout = ({ children }: PropsWithChildren) => children

export default GalleryLayout
