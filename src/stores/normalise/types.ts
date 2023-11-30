import type { NormaliseOptions } from '@libs/Sharp'

export type Store = State & Computed & Actions

interface State extends NormaliseOptions {
  isAdded: boolean
}

interface Computed {
  getNormaliseOptions: () => NormaliseOptions | null
}

/* eslint no-unused-vars: 0 */
export interface Actions {
  add: VoidFunction
  remove: VoidFunction
  reset: VoidFunction
  setLower: (lower: number) => void
  setUpper: (upper: number) => void
}
