import type { ResizeFit, ResizeKernel, ResizeOptions, ResizePosition } from '@server/Sharp'

export type Store = ResizeOptions & Computed & Actions

interface Computed {
  getResizeOptions: () => ResizeOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  set: (options: ResizeOptions | null) => void
  reset: VoidFunction

  setWidth: (width: number | null) => void
  setHeight: (height: number | null) => void

  // Extra
  setFit: (fit: ResizeFit) => void
  setBackground: (background: string) => void
  setPosition: (position: ResizePosition) => void
  setKernel: (kernel: ResizeKernel) => void

  toggleEnlargement: VoidFunction
  toggleReduction: VoidFunction
  toggleFastShrink: VoidFunction
  toggleDominantBackground: VoidFunction
}
