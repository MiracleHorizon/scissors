import { IsDefined, IsInt, Max, Min } from 'class-validator'

const LOWER = 0
const UPPER = 100

// FIXME: Сравнение lower & upper через ValidateIf
export class NormaliseDto {
  @IsInt()
  @Min(LOWER)
  @Max(UPPER - 1)
  @IsDefined()
  readonly lower: number

  @IsInt()
  @Min(LOWER + 1)
  @Max(UPPER)
  @IsDefined()
  readonly upper: number
}
