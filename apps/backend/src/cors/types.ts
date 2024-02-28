// Internal Nest.js / Express types

type StaticOrigin = boolean | string | RegExp | (string | RegExp)[]
type CustomOrigin = (
  requestOrigin: string,
  callback: (err: Error | null, origin?: StaticOrigin) => void
) => void

export interface CorsOptions {
  origin?: StaticOrigin | CustomOrigin
  methods?: string | string[]
  allowedHeaders?: string | string[]
  exposedHeaders?: string | string[]
  credentials?: boolean
  maxAge?: number
  preflightContinue?: boolean
  optionsSuccessStatus?: number
}
