import { IsDefined, IsInt, Min } from 'class-validator'

const MIN_DIRECTION_SIZE = 0
const MIN_SIZE = 1

export class ExtractOptionsDto {
  @IsInt()
  @Min(MIN_DIRECTION_SIZE)
  @IsDefined()
  readonly left: number

  @IsInt()
  @Min(MIN_DIRECTION_SIZE)
  @IsDefined()
  readonly top: number

  @IsInt()
  @Min(MIN_SIZE)
  @IsDefined()
  readonly width: number

  @IsInt()
  @Min(MIN_SIZE)
  @IsDefined()
  readonly height: number
}
