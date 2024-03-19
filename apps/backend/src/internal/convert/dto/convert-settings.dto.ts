import {
  IsBoolean,
  IsDefined,
  IsHexColor,
  IsIn,
  IsNumber,
  Max,
  Min,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { IMAGE_FILE_FORMAT, type ImageFileFormat, MAX_GAMMA, MIN_GAMMA } from '@scissors/sharp'

import { IsNullable } from '@lib/validation'
import { BlurDto } from './blur.dto'
import { NegateDto } from './negate.dto'
import { NormaliseDto } from './normalise.dto'
import { ModulateDto } from './modulate.dto'
import { RotateDto } from './rotate.dto'

export class ConvertSettingsDto {
  @IsBoolean()
  @IsDefined()
  readonly flip: boolean

  @IsBoolean()
  @IsDefined()
  readonly flop: boolean

  @IsBoolean()
  @IsDefined()
  readonly grayscale: boolean

  @IsHexColor()
  @IsNullable()
  @IsDefined()
  readonly tint: string | null

  @IsNumber()
  @IsNullable()
  @Min(MIN_GAMMA)
  @Max(MAX_GAMMA)
  @IsDefined()
  readonly gamma: number | null

  @IsNullable()
  @ValidateNested()
  @Type(() => BlurDto)
  @IsDefined()
  readonly blur: BlurDto | null

  @IsNullable()
  @ValidateNested()
  @Type(() => NegateDto)
  @IsDefined()
  readonly negate: NegateDto | null

  @IsNullable()
  @ValidateNested()
  @Type(() => NormaliseDto)
  @IsDefined()
  readonly normalise: NormaliseDto | null

  @IsNullable()
  @ValidateNested()
  @Type(() => ModulateDto)
  @IsDefined()
  readonly modulate: ModulateDto | null

  @IsNullable()
  @ValidateNested()
  @Type(() => RotateDto)
  @IsDefined()
  readonly rotate: RotateDto | null

  @IsIn(Object.values(IMAGE_FILE_FORMAT))
  @IsNullable()
  @IsDefined()
  readonly outputFormat: ImageFileFormat | null
}
