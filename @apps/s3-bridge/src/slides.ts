const REPO_OWNER = 'MiracleHorizon'
const REPO_NAME = 'scissors'
const REPO_BRANCH = 'main'
const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`
const GITHUB_USER_CONTENT_PATH = 'raw.githubusercontent.com'
const GITHUB_USER_CONTENT_REPO_PATH = `https://${GITHUB_USER_CONTENT_PATH}/${REPO_PATH}/${REPO_BRANCH}`
const APP_PATH = '@apps/frontend'

const pathForAssets = (path: string): string => {
  const ASSETS_PATH = 'src/assets'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${APP_PATH}/${ASSETS_PATH}/${path}`
}

const pathForGallerySlide = (slideName: string): string => {
  const GALLERY_SLIDES_PATH = 'slides'

  return pathForAssets(`${GALLERY_SLIDES_PATH}/${slideName}`)
}

export const slides = [
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
      normalize: {
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
