import { IsDefined, IsInt, Max, Min } from 'class-validator'

import { MAX_NORMALIZE, MIN_NORMALIZE } from '@scissors/sharp'

export class NormaliseDto {
  @IsInt()
  @Min(MIN_NORMALIZE)
  @Max(MAX_NORMALIZE - 1)
  @IsDefined()
  readonly lower: number

  @IsInt()
  @Min(MIN_NORMALIZE + 1)
  @Max(MAX_NORMALIZE)
  @IsDefined()
  readonly upper: number
}
