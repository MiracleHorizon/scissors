const SERVER_API_FALLBACK = 'http://localhost:4200'
const SERVER_API = import.meta.env.SERVER_API ?? SERVER_API_FALLBACK
export const createApiURL = (path: string): string => `${SERVER_API}/${path}`
