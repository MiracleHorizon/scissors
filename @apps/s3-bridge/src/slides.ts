const REPO_OWNER = 'MiracleHorizon'
const REPO_NAME = 'scissors'
const REPO_BRANCH = 'main'
const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`
const GITHUB_USER_CONTENT_PATH = 'raw.githubusercontent.com'
const GITHUB_USER_CONTENT_REPO_PATH = `https://${GITHUB_USER_CONTENT_PATH}/${REPO_PATH}/${REPO_BRANCH}`
const APP_PATH = '@apps/s3-bridge'

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
    beforeSrc: pathForSlide('slide-1-before.jpeg'),
    afterSrc: pathForSlide('slide-1-after.jpeg'),
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
    beforeSrc: pathForSlide('slide-2-before.jpeg'),
    afterSrc: pathForSlide('slide-2-after.jpeg'),
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
    beforeSrc: pathForSlide('slide-6-before.jpeg'),
    afterSrc: pathForSlide('slide-6-after.jpeg'),
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
    beforeSrc: pathForSlide('slide-4-before.jpeg'),
    afterSrc: pathForSlide('slide-4-after.jpeg'),
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
    beforeSrc: pathForSlide('slide-5-before.jpeg'),
    afterSrc: pathForSlide('slide-5-after.jpeg'),
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
    beforeSrc: pathForSlide('slide-3-before.jpeg'),
    afterSrc: pathForSlide('slide-3-after.jpeg'),
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
    beforeSrc: pathForSlide('slide-7-before.jpeg'),
    afterSrc: pathForSlide('slide-7-after.jpeg'),
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
    beforeSrc: pathForSlide('slide-9-before.jpeg'),
    afterSrc: pathForSlide('slide-9-after.jpeg'),
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
