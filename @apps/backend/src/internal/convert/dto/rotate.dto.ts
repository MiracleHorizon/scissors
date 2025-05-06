import { IsDefined, IsHexColor, IsInt, Max, Min } from 'class-validator'

import { MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

import { IsNullable } from '@lib/validation'

export class RotateDto {
  @IsInt()
  @Min(MIN_ROTATE_ANGLE)
  @Max(MAX_ROTATE_ANGLE)
  @IsDefined()
  readonly angle: number

  @IsHexColor()
  @IsNullable()
  readonly background: string | null
}
