import { create, type StateCreator } from 'zustand'

import type { RotateOptions } from '@scissors/sharp'

interface State {
  angle: number | null
  background: string | null
}

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getRotation: () => RotateOptions | null
  reset: () => void
  set: (options: RotateOptions) => void
  setAngle: (angle: number | null) => void
  setBackground: (background: string) => void
}

const defaultState: State = {
  angle: null,
  background: null
} as const

const rotationStoreCreator: StateCreator<Store> = (set, get) => ({
  ...defaultState,

  getRotation: () => {
    const { angle, background } = get()

    /*
     * Falsy angle value (null or 0) is not available.
     */
    if (!angle) {
      return null
    }

    return {
      angle,
      background
    }
  },
  set: options => set(options),
  reset: () => set(defaultState),
  setAngle: angle => set({ angle }),
  setBackground: background => set({ background })
})

export const createRotationStore = () => create<Store>()(rotationStoreCreator)
export const useRotationStore = createRotationStore()
