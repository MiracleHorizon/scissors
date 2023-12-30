import type { NegateOptions } from '@server/Sharp'

export type Store = NegateOptions & Computed & Actions

interface Computed {
  getNegateOptions: () => NegateOptions | null
}

/* eslint-disable no-unused-vars */
export interface Actions {
  set: (options: NegateOptions | null) => void
  reset: VoidFunction
  toggleValue: VoidFunction
  toggleAlpha: VoidFunction
}
