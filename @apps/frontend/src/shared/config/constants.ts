const SERVER_API_FALLBACK = 'http://localhost:4200'
export const SERVER_API = import.meta.env.SERVER_API ?? SERVER_API_FALLBACK

const SITE_DOMAIN_FALLBACK = 'http://localhost:3000'
export const SITE_DOMAIN = import.meta.env.SITE_DOMAIN ?? SITE_DOMAIN_FALLBACK

const AI_SERVER_API_FALLBACK = 'http://localhost:4201/api'
export const AI_SERVER_API = import.meta.env.AI_SERVER_API ?? AI_SERVER_API_FALLBACK

const S3_FALLBACK = 'http://localhost:4202'
export const S3_SERVER_API = import.meta.env.S3_SERVER_PORT ?? S3_FALLBACK
