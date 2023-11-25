import type { ConvertFormat } from '@libs/Sharp'

export type Store = State & Computed & Actions

export interface State {
  format: ConvertFormat | null
}

export interface Computed {
  getFormatOptions: () => ConvertFormat | null
}

/* eslint no-unused-vars: 0 */
export interface Actions {
  setFormat: (format: ConvertFormat | null) => void
}
