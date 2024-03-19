import { IsBoolean, IsDefined, IsHexColor, IsIn, IsInt, Max, Min } from 'class-validator'
import {
  EXTEND_WITH,
  type ExtendWith,
  MAX_EXTEND_DIRECTION_SIZE,
  MIN_EXTEND_DIRECTION_SIZE
} from '@scissors/sharp'

import { IsNullable } from '@lib/validation'

export class ExtendOptionsDto {
  @IsInt()
  @IsNullable()
  @Min(MIN_EXTEND_DIRECTION_SIZE)
  @Max(MAX_EXTEND_DIRECTION_SIZE)
  @IsDefined()
  readonly top: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_EXTEND_DIRECTION_SIZE)
  @Max(MAX_EXTEND_DIRECTION_SIZE)
  @IsDefined()
  readonly bottom: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_EXTEND_DIRECTION_SIZE)
  @Max(MAX_EXTEND_DIRECTION_SIZE)
  @IsDefined()
  readonly right: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_EXTEND_DIRECTION_SIZE)
  @Max(MAX_EXTEND_DIRECTION_SIZE)
  @IsDefined()
  readonly left: number | null

  @IsIn(Object.values(EXTEND_WITH))
  @IsNullable()
  @IsDefined()
  readonly extendWith: ExtendWith | null

  @IsHexColor()
  @IsNullable()
  @IsDefined()
  readonly background: string | null

  @IsBoolean()
  @IsDefined()
  readonly withDominantBackground: boolean
}
