import type { NegateOptions } from '@libs/Sharp'

export type Store = NegateOptions & Computed & Actions

interface Computed {
  getNegateOptions: () => NegateOptions | null
}

export interface Actions {
  reset: VoidFunction
  toggleValue: VoidFunction
  toggleAlpha: VoidFunction
}
