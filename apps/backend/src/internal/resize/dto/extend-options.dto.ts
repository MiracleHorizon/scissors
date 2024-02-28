import { IsBoolean, IsDefined, IsHexColor, IsIn, IsInt, Max, Min } from 'class-validator'
import type { ExtendWith } from 'sharp'

import { IsNullable } from '@lib/validation'
import { EXTEND_WITH } from '../resize.constants'

const MIN_DIRECTION_SIZE = 1
const MAX_DIRECTION_SIZE = 800

export class ExtendOptionsDto {
  @IsInt()
  @IsNullable()
  @Min(MIN_DIRECTION_SIZE)
  @Max(MAX_DIRECTION_SIZE)
  @IsDefined()
  readonly top: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_DIRECTION_SIZE)
  @Max(MAX_DIRECTION_SIZE)
  @IsDefined()
  readonly bottom: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_DIRECTION_SIZE)
  @Max(MAX_DIRECTION_SIZE)
  @IsDefined()
  readonly right: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_DIRECTION_SIZE)
  @Max(MAX_DIRECTION_SIZE)
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
