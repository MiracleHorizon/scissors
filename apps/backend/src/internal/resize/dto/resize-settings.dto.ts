import { ArrayMaxSize, ArrayMinSize, IsArray, IsDefined, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { RESIZE_OPERATION, type ResizeQueue } from '@scissors/sharp'

import { IsNullable } from '@lib/validation'
import { ResizeOptionsDto } from './resize-options.dto'
import { ExtendOptionsDto } from './extend-options.dto'
import { ExtractOptionsDto } from './extract-options.dto'
import { TrimOptionsDto } from './trim-options.dto'

export class ResizeSettingsDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(Object.values(RESIZE_OPERATION).length)
  readonly queue: ResizeQueue

  @ValidateNested()
  @IsNullable()
  @Type(() => ResizeOptionsDto)
  @IsDefined()
  readonly resize: ResizeOptionsDto | null

  @ValidateNested()
  @IsNullable()
  @Type(() => ExtendOptionsDto)
  @IsDefined()
  readonly extend: ExtendOptionsDto | null

  @ValidateNested()
  @IsNullable()
  @Type(() => ExtractOptionsDto)
  @IsDefined()
  readonly extract: ExtractOptionsDto | null

  @ValidateNested()
  @IsNullable()
  @Type(() => TrimOptionsDto)
  @IsDefined()
  readonly trim: TrimOptionsDto | null
}
