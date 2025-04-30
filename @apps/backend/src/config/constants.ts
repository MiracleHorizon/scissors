import path from 'path'
import fs from 'fs'

export const ENVIRONMENT = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
} as const

const PRODUCTION_ENV_FILENAME = '.env.production'
const DEVELOPMENT_ENV_FILENAME = '.env.development'

export const getEnvFilePath = (): string => {
  const envFilename =
    process.env.NODE_ENV === ENVIRONMENT.PRODUCTION
      ? PRODUCTION_ENV_FILENAME
      : DEVELOPMENT_ENV_FILENAME

  const envFilePath = path.resolve(__dirname, '..', '..', '..', '..', envFilename)

  if (!fs.existsSync(envFilePath)) {
    throw new Error(`Environment file not found: ${envFilePath}`)
  }

  return envFilePath
}

export const envFilePath = getEnvFilePath()

export const DEFAULT_PORT = 4200
