import { IsDefined, IsInt, IsNumber, Max, Min } from 'class-validator'
import {
  MAX_BRIGHTNESS,
  MAX_HUE,
  MAX_LIGHTNESS,
  MAX_SATURATION,
  MIN_BRIGHTNESS,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_SATURATION
} from '@scissors/sharp'

import { IsNullable } from '@lib/validation'

export class ModulateDto {
  @IsNumber()
  @IsNullable()
  @Min(MIN_BRIGHTNESS)
  @Max(MAX_BRIGHTNESS)
  @IsDefined()
  readonly brightness: number | null

  @IsNumber()
  @IsNullable()
  @Min(MIN_LIGHTNESS)
  @Max(MAX_LIGHTNESS)
  @IsDefined()
  readonly lightness: number | null

  @IsNumber()
  @IsNullable()
  @Min(MIN_SATURATION)
  @Max(MAX_SATURATION)
  @IsDefined()
  readonly saturation: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_HUE)
  @Max(MAX_HUE)
  @IsDefined()
  readonly hue: number | null
}
