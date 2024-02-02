import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery'
}

const GalleryLayout: FC<PropsWithChildren> = ({ children }) => children

export default GalleryLayout
