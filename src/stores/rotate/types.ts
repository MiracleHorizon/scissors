import type { RotateOptions } from '@libs/Sharp'

export type Store = State & Computed & Actions

export interface State {
  isAdded: boolean
  angle: number | null
  background: string | null
}

interface Computed {
  getRotateOptions: () => RotateOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  add: VoidFunction
  remove: VoidFunction
  reset: VoidFunction
  setAngle: (angle: number) => void
  setBackground: (background: string) => void
}