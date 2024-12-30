import { IsBoolean, IsDefined } from 'class-validator'

export class NegateDto {
  @IsBoolean()
  @IsDefined()
  readonly value: boolean

  @IsBoolean()
  @IsDefined()
  readonly alpha: boolean
}
