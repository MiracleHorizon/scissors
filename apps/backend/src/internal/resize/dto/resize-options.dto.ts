import { IsBoolean, IsDefined, IsHexColor, IsIn, IsInt, Max, Min } from 'class-validator'
import {
  MAX_RESIZE_WIDTH,
  MIN_RESIZE_SIZE,
  RESIZE_FIT,
  RESIZE_GRAVITY,
  RESIZE_KERNEL,
  RESIZE_POSITION,
  type ResizeFit,
  type ResizeKernel
} from '@scissors/sharp'

import { IsNullable } from '@lib/validation'

// TODO: Сравнение width & height. Не могут оба быть равны null
export class ResizeOptionsDto {
  @IsInt()
  @IsNullable()
  @Min(MIN_RESIZE_SIZE)
  @Max(MAX_RESIZE_WIDTH)
  @IsDefined()
  readonly width: number | null

  @IsInt()
  @IsNullable()
  @Min(MIN_RESIZE_SIZE)
  @Max(MAX_RESIZE_WIDTH)
  @IsDefined()
  readonly height: number | null

  @IsIn(Object.values(RESIZE_FIT))
  @IsNullable()
  @IsDefined()
  readonly fit: keyof ResizeFit | null

  @IsIn(Object.values(RESIZE_KERNEL))
  @IsNullable()
  @IsDefined()
  readonly kernel: keyof ResizeKernel | null

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
