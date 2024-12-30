import { IsDefined, IsInt, Min } from 'class-validator'

export class ExtractOptionsDto {
  @IsInt()
  @Min(0)
  @IsDefined()
  readonly left: number

  @IsInt()
  @Min(0)
  @IsDefined()
  readonly top: number

  @IsInt()
  @Min(1)
  @IsDefined()
  readonly width: number

  @IsInt()
  @Min(1)
  @IsDefined()
  readonly height: number
}
