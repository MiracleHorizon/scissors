import type { ComponentPropsWithoutRef } from 'react'

import type GallerySlide from '../components/GallerySlide'

// TODO: Унифицировать
const githubRowPath = 'https://raw.githubusercontent.com'
const staticFilePath = 'MiracleHorizon/scissors/main/src/app/gallery/slides/'
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
    label: 'Giza, Egypt',
    beforeSrc: slidePath + 'slide-6-before.jpeg',
    afterSrc: slidePath + 'slide-6-after.jpeg',
    details: [
      {
        label: 'Grayscale',
        value: 'enabled'
      }
    ],
    settings: {
      grayscale: true
    }
  },
  {
    label: 'Abstraction 1',
    beforeSrc: slidePath + 'slide-4-before.jpeg',
    afterSrc: slidePath + 'slide-4-after.jpeg',
    details: [
      {
        label: 'Negate',
        value: 'enabled'
      }
    ],
    settings: {
      negate: {
        value: true,
        alpha: false
      }
    },
    orientation: 'portrait'
  },
  {
    label: 'Blueberry',
    beforeSrc: slidePath + 'slide-5-before.jpeg',
    afterSrc: slidePath + 'slide-5-after.jpeg',
    details: [
      {
        label: 'Negate',
        value: 'enabled'
      },
      {
        label: 'Tint',
        value: '#2e2e2e'
      },
      {
        label: 'Normalise',
        value: '13-99%'
      }
    ],
    settings: {
      negate: {
        value: true,
        alpha: false
      },
      tint: '#2e2e2e',
      normalise: {
        lower: 13,
        upper: 99
      }
    },
    orientation: 'portrait'
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
  },
  {
    // eslint-disable-next-line quotes
    label: "The lion's leader",
    beforeSrc: slidePath + 'slide-7-before.jpeg',
    afterSrc: slidePath + 'slide-7-after.jpeg',
    details: [
      {
        label: 'Grayscale',
        value: 'enabled'
      }
    ],
    settings: {
      grayscale: true
    },
    orientation: 'portrait'
  },
  {
    label: 'Jellyfish',
    beforeSrc: slidePath + 'slide-9-before.jpeg',
    afterSrc: slidePath + 'slide-9-after.jpeg',
    details: [
      {
        label: 'Negate',
        value: 'enabled'
      }
    ],
    settings: {
      negate: {
        value: true,
        alpha: false
      }
    },
    orientation: 'portrait'
  }
]
