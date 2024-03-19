import { IsBoolean, IsDefined, IsHexColor, IsInt, Max, Min } from 'class-validator'
import { MAX_ROTATE_ANGLE, MIN_ROTATE_ANGLE } from '@scissors/sharp'

export class RotateDto {
  @IsInt()
  @Min(MIN_ROTATE_ANGLE)
  @Max(MAX_ROTATE_ANGLE)
  @IsDefined()
  readonly angle: number

  @IsHexColor()
  @IsDefined()
  readonly background: string

  @IsBoolean()
  @IsDefined()
  readonly withDominantBackground: boolean
}
