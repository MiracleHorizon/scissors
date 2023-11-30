import type { BlurOptions } from '@libs/Sharp'

export type Store = BlurOptions & Computed & Actions

interface Computed {
  getBlurOptions: () => BlurOptions
}

/* eslint no-unused-vars: 0 */
export interface Actions {
  toggle: VoidFunction
  reset: VoidFunction
  addSigma: VoidFunction
  removeSigma: VoidFunction
  setSigma: (sigma: number) => void
}
