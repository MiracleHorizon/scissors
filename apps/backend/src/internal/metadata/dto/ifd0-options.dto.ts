import { IsDateString, IsDefined, IsString } from 'class-validator'

import { IsNullable } from '@lib/validation'

// TODO: min, max, etc
export class Ifd0OptionsDto {
  @IsString()
  @IsNullable()
  @IsDefined()
  readonly make: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly model: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly artist: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly copyright: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly imageDescription: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly software: string | null

  @IsDateString()
  @IsNullable()
  @IsDefined()
  readonly dateTime: Date | string | null
}
