import type { ConfigModuleOptions } from '@nestjs/config'

import { validate } from './env.validation'
import { DEVELOPMENT_ENV_FILE, PRODUCTION_ENV_FILE } from './constants'

export const config: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: process.env.NODE_ENV === 'production' ? PRODUCTION_ENV_FILE : DEVELOPMENT_ENV_FILE,
  validate
}
