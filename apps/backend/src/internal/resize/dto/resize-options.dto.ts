import { IsBoolean, IsDefined, IsHexColor, IsIn, IsInt, Max, Min } from 'class-validator'
import type { FitEnum, KernelEnum } from 'sharp'

import { IsNullable } from '@lib/validation'
import { RESIZE_FIT, RESIZE_GRAVITY, RESIZE_KERNEL, RESIZE_POSITION } from '../resize.constants'

const MIN_SIZE = 1
const MAX_WIDTH = 1920
const MAX_HEIGHT = 1920

// FIXME: Сравнение width & height. Не могут оба быть равны null
export class ResizeOptionsDto {
  @IsInt()
  @IsNullable()
  @Min(MIN_SIZE)
  @Max(MAX_WIDTH)
  @IsDefined()
  readonly width: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_SIZE)
  @Max(MAX_HEIGHT)
  @IsDefined()
  readonly height: number | null

  @IsIn(Object.values(RESIZE_FIT))
  @IsNullable()
  @IsDefined()
  readonly fit: keyof FitEnum | null

  @IsIn(Object.values(RESIZE_KERNEL))
  @IsNullable()
  @IsDefined()
  readonly kernel: keyof KernelEnum | null

  @IsIn(Object.values([...Object.values(RESIZE_POSITION), ...Object.values(RESIZE_GRAVITY)]))
  @IsNullable()
  @IsDefined()
  readonly position: string | null

  @IsHexColor()
  @IsNullable()
  @IsDefined()
  readonly background: string | null

  @IsBoolean()
  @IsDefined()
  readonly withoutEnlargement: boolean

  @IsBoolean()
  @IsDefined()
  readonly withoutReduction: boolean

  @IsBoolean()
  @IsDefined()
  readonly fastShrinkOnLoad: boolean

  @IsBoolean()
  @IsDefined()
  readonly withDominantBackground: boolean
}
