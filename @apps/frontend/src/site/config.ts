export { ALLOWED_IMAGE_FORMATS as allowedImageFormats } from '@scissors/sharp'

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

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
const SITE_DOMAIN_FALLBACK = 'http://localhost:3000'
export const SITE_DOMAIN = import.meta.env.SITE_DOMAIN ?? SITE_DOMAIN_FALLBACK

// API
const SERVER_API_FALLBACK = 'http://localhost:4200'
const SERVER_API = import.meta.env.SERVER_API ?? SERVER_API_FALLBACK
export const createApiURL = (path: string) => `${SERVER_API}/${path}`

// REPOSITORY
const REPO_OWNER = 'MiracleHorizon'
const REPO_NAME = 'scissors'
const REPO_BRANCH = 'main'
const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`
const FRONTEND_PATH = '@apps/frontend'

const GITHUB_USER_CONTENT_PATH = 'raw.githubusercontent.com'
const GITHUB_USER_CONTENT_REPO_PATH = `https://${GITHUB_USER_CONTENT_PATH}/${REPO_PATH}/${REPO_BRANCH}`

export const GITHUB_PATH = 'github.com'
export const GITHUB_REPO_PATH = `https://${GITHUB_PATH}/${REPO_PATH}`

export const pathForAssets = (path: string): string => {
  const ASSETS_PATH = 'src/assets'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${FRONTEND_PATH}/${ASSETS_PATH}/${path}`
}

export const pathForSocial = (path: string): string => {
  const SOCIAL_PATH = 'social'

  return `${GITHUB_USER_CONTENT_REPO_PATH}/${SOCIAL_PATH}/${path}`
}

// VERCEL
const VERCEL_SERVERLESS_PAYLOAD_LIMIT_MB = 4.5 // decimal variant

export const MAX_FILE_SIZE_MB = VERCEL_SERVERLESS_PAYLOAD_LIMIT_MB
