import { APP_PATH, GITHUB_USER_CONTENT_REPO_PATH } from './config/constants'

const pathForObjectStorage = (path: string): string => {
  const ASSETS_PATH = 'object-storage'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${APP_PATH}/${ASSETS_PATH}/${path}`
}

const pathForSlide = (name: string): string => {
  const SLIDES_PATH = 'slides'

  return pathForObjectStorage(`${SLIDES_PATH}/${name}`)
}

export const slides = [
  {
    label: 'Volkswagen Käfer',
    beforeSrc: 'slide-1-before.jpeg',
    afterSrc: 'slide-1-after.jpeg',
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
    beforeSrc: 'slide-2-before.jpeg',
    afterSrc: 'slide-2-after.jpeg',
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
    beforeSrc: 'slide-6-before.jpeg',
    afterSrc: 'slide-6-after.jpeg',
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
    beforeSrc: 'slide-4-before.jpeg',
    afterSrc: 'slide-4-after.jpeg',
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
    beforeSrc: 'slide-5-before.jpeg',
    afterSrc: 'slide-5-after.jpeg',
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
      normalize: {
        lower: 13,
        upper: 99
      }
    },
    orientation: 'portrait'
  },
  {
    label: 'Sahara',
    beforeSrc: 'slide-3-before.jpeg',
    afterSrc: 'slide-3-after.jpeg',
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
    beforeSrc: 'slide-7-before.jpeg',
    afterSrc: 'slide-7-after.jpeg',
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
    beforeSrc: 'slide-9-before.jpeg',
    afterSrc: 'slide-9-after.jpeg',
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
].map(slide => ({
  ...slide,
  beforeSrc: pathForSlide(slide.beforeSrc),
  afterSrc: pathForSlide(slide.afterSrc)
}))
