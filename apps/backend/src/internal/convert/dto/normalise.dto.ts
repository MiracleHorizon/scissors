import { IsDefined, IsInt, Max, Min } from 'class-validator'

import { MAX_NORMALISE, MIN_NORMALISE } from '@scissors/sharp'

export class NormaliseDto {
  @IsInt()
  @Min(MIN_NORMALISE)
  @Max(MAX_NORMALISE - 1)
  @IsDefined()
  readonly lower: number

  @IsInt()
  @Min(MIN_NORMALISE + 1)
  @Max(MAX_NORMALISE)
  @IsDefined()
  readonly upper: number
}
