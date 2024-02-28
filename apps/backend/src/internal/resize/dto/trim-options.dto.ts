import { IsHexColor, IsNumber, IsPositive } from 'class-validator'

import { IsNullable, IsZero } from '@lib/validation'

export class TrimOptionsDto {
  @IsHexColor()
  @IsNullable()
  readonly background: string | null

  @IsNumber()
  @IsZero()
  @IsPositive()
  @IsNullable()
  readonly threshold: number | null

  // With sharp v0.33.2 (have build issues). Currently - v0.32.6
  // readonly lineArt: boolean
}
