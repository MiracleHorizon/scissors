export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

// METADATA
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

// DOMAINS
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

// REPOSITORY
const REPO_OWNER = 'MiracleHorizon'
const REPO_NAME = 'scissors'
const REPO_BRANCH = 'main'
const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`

const GITHUB_USER_CONTENT_PATH = 'raw.githubusercontent.com'
const GITHUB_USER_CONTENT_REPO_PATH = `https://${GITHUB_USER_CONTENT_PATH}/${REPO_PATH}/${REPO_BRANCH}`

export const GITHUB_PATH = 'github.com'
export const GITHUB_REPO_PATH = `https://${GITHUB_PATH}/${REPO_PATH}`

export function pathForAssets(path: string): string {
  const ASSETS_PATH = 'src/assets'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${ASSETS_PATH}/${path}`
}

export function pathForSocial(path: string): string {
  const SOCIAL_PATH = 'social'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${SOCIAL_PATH}/${path}`
}

// VERCEL
const VERCEL_SERVERLESS_PAYLOAD_LIMIT_MB = 4.5 // decimal variant

export const MAX_FILE_SIZE_MB = VERCEL_SERVERLESS_PAYLOAD_LIMIT_MB
