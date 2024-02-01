import type { ComponentPropsWithoutRef } from 'react'

import type GallerySlide from '../components/GallerySlide'

// TODO: Унифицировать
const githubRowPath = 'https://raw.githubusercontent.com'
// TODO: Update before merge to main
const staticFilePath = 'MiracleHorizon/scissors/feat/gallery/src/app/gallery/slides/'
const slidePath = `${githubRowPath}/${staticFilePath}/`

type SlideProps = Omit<ComponentPropsWithoutRef<typeof GallerySlide>, 'index'>
export const slides: SlideProps[] = [
  {
    label: 'Volkswagen Käfer',
    beforeSrc: slidePath + 'slide-1-before.jpeg',
    afterSrc: slidePath + 'slide-1-after.jpeg',
    details: [
      {
        label: 'Blur',
        value: 4.5
      },
      {
        label: 'Gamma',
        value: 2.7
      },
      {
        label: 'Grayscale',
        value: 'enabled'
      }
    ],
    settings: {
      blur: {
        value: true,
        sigma: 4.5
      },
      gamma: 2.7,
      grayscale: true
    }
  },
  {
    label: 'Monstera Deliciosa',
    beforeSrc: slidePath + 'slide-2-before.jpeg',
    afterSrc: slidePath + 'slide-2-after.jpeg',
    details: [
      {
        label: 'Blur',
        value: 4.5
      }
    ],
    settings: {
      blur: {
        value: true,
        sigma: 4.5
      }
    }
  },
  {
    label: 'Sahara',
    beforeSrc: slidePath + 'slide-3-before.jpeg',
    afterSrc: slidePath + 'slide-3-after.jpeg',
    details: [
      {
        label: 'Hue',
        value: '315°'
      }
    ],
    settings: {
      modulate: {
        hue: 315,
        lightness: null,
        brightness: null,
        saturation: null
      }
    }
  }
]
