import { IsBoolean, IsDefined, IsNumber, Max, Min } from 'class-validator'

import { IsNullable } from '@lib/validation'

const MIN_SIGMA = 0.3
const MAX_SIGMA = 10

export class BlurDto {
  @IsBoolean()
  @IsDefined()
  readonly value: boolean

  @IsNumber()
  @IsNullable()
  @Min(MIN_SIGMA)
  @Max(MAX_SIGMA)
  @IsDefined()
  readonly sigma: number | null
}
