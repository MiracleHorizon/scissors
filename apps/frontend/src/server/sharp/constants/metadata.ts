import type { IFD0Options } from '@server/sharp'

export const DEFAULT_IFD0_OPTIONS: IFD0Options = {
  make: null,
  model: null,
  copyright: null,
  software: null,
  artist: null,
  imageDescription: null,
  dateTime: null
} as const
