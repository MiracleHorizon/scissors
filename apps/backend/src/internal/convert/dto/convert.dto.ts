import { IsDefined, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { ConvertSettingsDto } from './convert-settings.dto'

export class ConvertDto {
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ConvertSettingsDto)
  @IsDefined()
  readonly settings: ConvertSettingsDto
}
