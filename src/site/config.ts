export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

// Metadata
export const SITE_TITLE = 'Scissors'
export const SITE_DESCRIPTION =
  'Your awesome application for versatile image formatting and processing!'
export const SITE_KEYWORDS = [
  'image',
  'processing',
  'photo',
  'filter',
  'picture',
  'color correction',
  'cropping',
  'mask',
  'trimming',
  'brightness',
  'contrast',
  'saturation',
  'shadow',
  'lighting',
  'effect',
  'collage',
  'noise',
  'blur',
  'sharpness',
  'chroma',
  'retro',
  'composition',
  'vignette',
  'pixelation',
  'conversion',
  'resizing',
  'quality',
  'rotation',
  'format',
  'compress',
  'crop',
  'jpeg',
  'jpg',
  'png',
  'webp',
  'avif',
  'tiff',
  'scissors'
]

// Domains
const SITE_DOMAIN_PRODUCTION = process.env.SITE_DOMAIN_PRODUCTION
const SITE_DOMAIN_DEVELOPMENT = process.env.SITE_DOMAIN_DEVELOPMENT
const SITE_DOMAIN_FALLBACK = 'http://localhost:3000'

function getSiteDomain(): string {
  let domain

  if (isProduction) {
    domain = SITE_DOMAIN_PRODUCTION
  } else if (isDevelopment) {
    domain = SITE_DOMAIN_DEVELOPMENT
  }

  return domain ?? SITE_DOMAIN_FALLBACK
}

export const SITE_DOMAIN = getSiteDomain()

// Repository
const REPO_OWNER = 'MiracleHorizon'
const REPO_NAME = 'scissors'
const REPO_BRANCH = 'main'
const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`

const GITHUB_USER_CONTENT_PATH = 'raw.githubusercontent.com'
const GITHUB_USER_CONTENT_REPO_PATH = `https://${GITHUB_USER_CONTENT_PATH}/${REPO_PATH}/${REPO_BRANCH}`

export const GITHUB_REPO_PATH = `https://github.com/${REPO_PATH}`

export function pathForPublic(path: string): string {
  const PUBLIC_PATH = 'public'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${PUBLIC_PATH}/${path}`
}

export function pathForGallerySlide(slideName: string): string {
  const GALLERY_PATH = 'src/app/gallery'
  const GALLERY_SLIDES_PATH = 'slides'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${GALLERY_PATH}/${GALLERY_SLIDES_PATH}/${slideName}`
}
