import type { ComponentPropsWithoutRef } from 'react'

import { pathForAssets } from '@site/config'
import type GallerySlide from './components/GallerySlide'

const pathForGallerySlide = (slideName: string): string => {
  const GALLERY_SLIDES_PATH = 'slides'

  return pathForAssets(`${GALLERY_SLIDES_PATH}/${slideName}`)
}

type SlideProps = Omit<ComponentPropsWithoutRef<typeof GallerySlide>, 'index'>

export const slides: SlideProps[] = [
  {
    label: 'Volkswagen Käfer',
    beforeSrc: pathForGallerySlide('slide-1-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-1-after.jpeg'),
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
    // eslint-disable-next-line quotes
    label: "The lion's leader",
    beforeSrc: pathForGallerySlide('slide-7-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-7-after.jpeg'),
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
    label: 'Monstera Deliciosa',
    beforeSrc: pathForGallerySlide('slide-2-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-2-after.jpeg'),
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
    label: 'Abstraction 1',
    beforeSrc: pathForGallerySlide('slide-4-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-4-after.jpeg'),
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
    label: 'Giza, Egypt',
    beforeSrc: pathForGallerySlide('slide-6-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-6-after.jpeg'),
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
    label: 'Blueberry',
    beforeSrc: pathForGallerySlide('slide-5-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-5-after.jpeg'),
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
    beforeSrc: pathForGallerySlide('slide-3-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-3-after.jpeg'),
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
    label: 'Jellyfish',
    beforeSrc: pathForGallerySlide('slide-9-before.jpeg'),
    afterSrc: pathForGallerySlide('slide-9-after.jpeg'),
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

export const images = [
  {
    src: pathForGallerySlide('slide-1-after.jpeg'),
    caption: 'Volkswagen Käfer'
  },
  {
    // eslint-disable-next-line quotes
    caption: "The lion's leader",
    src: pathForGallerySlide('slide-7-after.jpeg')
  },
  {
    caption: 'Monstera Deliciosa',
    src: pathForGallerySlide('slide-2-after.jpeg')
  },
  {
    caption: 'Abstraction 1',
    src: pathForGallerySlide('slide-4-after.jpeg')
  },
  {
    caption: 'Giza, Egypt',
    src: pathForGallerySlide('slide-6-after.jpeg')
  },
  {
    caption: 'Blueberry',
    src: pathForGallerySlide('slide-5-after.jpeg')
  },
  {
    caption: 'Sahara',
    src: pathForGallerySlide('slide-3-after.jpeg')
  },
  {
    caption: 'Jellyfish',
    src: pathForGallerySlide('slide-9-after.jpeg')
  }
]
