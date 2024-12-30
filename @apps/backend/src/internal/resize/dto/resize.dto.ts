import { IsDefined, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { ResizeSettingsDto } from './resize-settings.dto'

export class ResizeDto {
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ResizeSettingsDto)
  @IsDefined()
  readonly settings: ResizeSettingsDto
}
