import type { ResizeFit, ResizeKernel, ResizeOptions, ResizePosition } from '@libs/Sharp'

export type Store = ResizeOptions & Computed & Actions

interface Computed {
  getResizeOptions: () => ResizeOptions
}

/* eslint no-unused-vars: 0 */
interface Actions {
  reset: VoidFunction

  setWidth: (width: number) => void
  setHeight: (height: number) => void

  resetWidth: VoidFunction
  resetHeight: VoidFunction

  // Extra
  setFit: (fit: ResizeFit) => void
  setBackground: (background: string) => void
  setPosition: (position: ResizePosition) => void
  setKernel: (kernel: ResizeKernel) => void

  toggleEnlargement: VoidFunction
  toggleReduction: VoidFunction
  toggleFastShrink: VoidFunction
}
