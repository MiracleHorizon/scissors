import type { ComponentPropsWithoutRef } from 'react'

import type GallerySlide from '../components/GallerySlide'

type SlideProps = Omit<ComponentPropsWithoutRef<typeof GallerySlide>, 'index'>
const githubRowPath = 'https://raw.githubusercontent.com'
// TODO: Update before merge to main
const staticFilePath = 'MiracleHorizon/scissors/feat/gallery/src/app/gallery/slides/'
const slidePath = `${githubRowPath}/${staticFilePath}/`
export const slides: SlideProps[] = [
  {
    beforeSrc: slidePath + 'slide-1-before.jpeg',
    afterSrc: slidePath + 'slide-1-after.jpeg'
  },
  {
    beforeSrc: slidePath + 'slide-2-before.jpeg',
    afterSrc: slidePath + 'slide-2-after.jpeg'
  },
  {
    beforeSrc: slidePath + 'slide-3-before.jpeg',
    afterSrc: slidePath + 'slide-3-after.jpeg'
  }
]
