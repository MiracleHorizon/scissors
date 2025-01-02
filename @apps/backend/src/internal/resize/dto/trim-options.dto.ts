import { IsBoolean, IsDefined, IsHexColor, IsNumber, IsPositive } from 'class-validator'

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

  @IsBoolean()
  @IsDefined()
  readonly lineArt: boolean
}
