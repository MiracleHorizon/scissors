import { IsDateString, IsDefined, IsNumber, IsString, IsTimeZone } from 'class-validator'

import { IsNullable } from '@lib/validation'

// TODO: min, max, etc
export class Ifd2OptionsDto {
  @IsString()
  @IsNullable()
  @IsDefined()
  readonly lensMake: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly lensModel: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly lensSerialNumber: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly bodySerialNumber: string | null

  @IsString()
  @IsNullable()
  @IsDefined()
  readonly cameraOwnerName: string | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly subjectDistanceRange: 0 | 1 | 2 | 3 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly saturation: 0 | 1 | 2 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly sharpness: 0 | 1 | 2 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly gainControl: 0 | 1 | 2 | 3 | 4 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly whiteBalance: 0 | 1 | null

  @IsTimeZone()
  @IsNullable()
  @IsDefined()
  readonly offsetTimeOriginal: string | null

  @IsTimeZone()
  @IsNullable()
  @IsDefined()
  readonly offsetTime: string | null

  @IsTimeZone()
  @IsNullable()
  @IsDefined()
  readonly offsetTimeDigitized: string | null

  @IsDateString()
  @IsNullable()
  @IsDefined()
  readonly dateTimeDigitized: Date | string | null

  @IsDateString()
  @IsNullable()
  @IsDefined()
  readonly dateTimeOriginal: Date | string | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly sceneCaptureType: 0 | 1 | 2 | 3 | 4 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly sensingMethod: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly exposureProgram: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly exposureMode: 0 | 1 | 2 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly customRendered: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly meteringMode: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 255 | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly apertureValue: number | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly focalLength: number | null

  // TODO: Validation
  @IsString()
  @IsNullable()
  @IsDefined()
  readonly flash: string | null

  @IsNumber()
  @IsNullable()
  @IsDefined()
  readonly contrast: 0 | 1 | 2 | null

  // TODO: Validation
  @IsString()
  @IsNullable()
  @IsDefined()
  readonly lightSource: string | null
}
