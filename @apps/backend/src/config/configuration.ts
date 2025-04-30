import type { ConfigModuleOptions } from '@nestjs/config'

import { validate } from './env.validation'
import { envFilePath } from './constants'

export const config: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath,
  validate
}
