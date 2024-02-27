import type { ConfigModuleOptions } from '@nestjs/config'

// TODO: Env validation
// https://docs.nestjs.com/techniques/configuration#schema-validation
function getEnvFilePath() {
  const isProduction = process.env.NODE_ENV === 'production'
  if (isProduction) {
    return '.env.production'
  }

  const isDevelopment = process.env.NODE_ENV === 'development'
  if (isDevelopment) {
    return '.env.development'
  }
}

export const config: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: getEnvFilePath()
}
