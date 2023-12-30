import type { ResizeFit, ResizeKernel, ResizeOptions, ResizePosition } from '@server/Sharp'

export type Store = ResizeOptions & Computed & Actions

interface Computed {
  getResizeOptions: () => ResizeOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  set: (options: ResizeOptions | null) => void
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
