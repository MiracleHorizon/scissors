import { plainToInstance } from 'class-transformer'
import {
  IsDefined,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
  validateSync
} from 'class-validator'

import { ENVIRONMENT } from './constants'
import type { Environment } from './types'

// https://docs.nestjs.com/techniques/configuration#schema-validation
class EnvironmentVariables {
  @IsIn(Object.values(ENVIRONMENT))
  @IsString()
  @IsOptional()
  readonly NODE_ENV: Environment

  @IsNumber()
  @Min(0)
  @Max(65535)
  @IsOptional()
  readonly SERVER_PORT: number

  @IsUrl({
    // eslint-disable-next-line camelcase
    require_tld: false
  })
  @IsString()
  @IsDefined()
  readonly CLIENT_API: string
}

export const validate = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true
  })
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false
  })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }
  return validatedConfig
}
