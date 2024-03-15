import { IsDefined, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { IsNullable } from '@lib/validation'
import { Ifd0OptionsDto } from './ifd0-options.dto'
import { Ifd2OptionsDto } from './ifd2-options.dto'

export class HandleMetadataSettingsDto {
  @IsNullable()
  @ValidateNested()
  @Type(() => Ifd0OptionsDto)
  @IsDefined()
  readonly ifd0: Ifd0OptionsDto | null

  @IsNullable()
  @ValidateNested()
  @Type(() => Ifd2OptionsDto)
  @IsDefined()
  readonly ifd2: Ifd2OptionsDto | null
}
