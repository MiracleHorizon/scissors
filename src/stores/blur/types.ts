import type { BlurOptions } from '@server/Sharp'

export type Store = BlurOptions & Computed & Actions

interface Computed {
  getBlurOptions: () => BlurOptions | null
}

/* eslint no-unused-vars: 0 */
export interface Actions {
  set: (options: BlurOptions | null) => void
  toggle: VoidFunction
  reset: VoidFunction
  addSigma: VoidFunction
  removeSigma: VoidFunction
  setSigma: (sigma: number) => void
}
