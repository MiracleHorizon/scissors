import type { RotateOptions } from '@server/Sharp'

export type Store = State & Computed & Actions

export interface State {
  isAdded: boolean
  angle: number | null
  background: string | null
  withDominantBackground: boolean
}

interface Computed {
  getRotateOptions: () => RotateOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  set: (options: RotateOptions | null) => void
  add: VoidFunction
  remove: VoidFunction
  reset: VoidFunction
  setAngle: (angle: number) => void
  setBackground: (background: string) => void
  toggleWithDominantBackground: VoidFunction
}
