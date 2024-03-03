import { IsArray, IsDefined, MaxLength, MinLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { IsNullable } from '@lib/validation'
import { ResizeOptionsDto } from './resize-options.dto'
import { ExtendOptionsDto } from './extend-options.dto'
import { TrimOptionsDto } from './trim-options.dto'
import { RESIZE_OPERATION_NAME } from '../resize.constants'
import type { ResizeQueue } from '../resize.types'

export class ResizeSettingsDto {
  @IsArray()
  @MinLength(1)
  @MaxLength(Object.values(RESIZE_OPERATION_NAME).length)
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
  @Type(() => TrimOptionsDto)
  @IsDefined()
  readonly trim: TrimOptionsDto | null
}
