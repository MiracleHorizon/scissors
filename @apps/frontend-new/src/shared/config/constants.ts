const SERVER_API_FALLBACK = 'http://localhost:4200'
export const SERVER_API = import.meta.env.SERVER_API ?? SERVER_API_FALLBACK

const SITE_DOMAIN_FALLBACK = 'http://localhost:3000'
export const SITE_DOMAIN = import.meta.env.SITE_DOMAIN ?? SITE_DOMAIN_FALLBACK
