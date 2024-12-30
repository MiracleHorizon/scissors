import type { ENVIRONMENT } from './constants'

export type Environment = (typeof ENVIRONMENT)[keyof typeof ENVIRONMENT]
