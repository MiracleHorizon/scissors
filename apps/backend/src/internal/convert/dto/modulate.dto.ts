import { IsDefined, IsInt, IsNumber, Max, Min } from 'class-validator'

import { IsNullable } from '@lib/validation'

const MIN_BRIGHTNESS = 0
const MAX_BRIGHTNESS = 1

// Lightness is in percentage
const MIN_LIGHTNESS = 0
const MAX_LIGHTNESS = 100

// Hue angle is in degrees
const MIN_HUE = 0
const MAX_HUE = 360

const MIN_SATURATION = 0
const MAX_SATURATION = 10

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
