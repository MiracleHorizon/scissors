import { IsBoolean, IsDefined, IsNumber, Max, Min } from 'class-validator'
import { MAX_BLUR_SIGMA, MIN_BLUR_SIGMA } from '@scissors/sharp'

import { IsNullable } from '@lib/validation'

export class BlurDto {
  @IsBoolean()
  @IsDefined()
  readonly value: boolean

  @IsNumber()
  @IsNullable()
  @Min(MIN_BLUR_SIGMA)
  @Max(MAX_BLUR_SIGMA)
  @IsDefined()
  readonly sigma: number | null
}
