import { IsBoolean, IsDefined, IsHexColor, IsInt, Max, Min } from 'class-validator'

const MAX_ANGLE = 360
const MIN_ANGLE = -MAX_ANGLE

export class RotateDto {
  @IsInt()
  @Min(MIN_ANGLE)
  @Max(MAX_ANGLE)
  @IsDefined()
  readonly angle: number

  @IsHexColor()
  @IsDefined()
  readonly background: string

  @IsBoolean()
  @IsDefined()
  readonly withDominantBackground: boolean
}
