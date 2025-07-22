import { create, type StateCreator } from 'zustand'

import { DEFAULT_TINT_COLOR } from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store {
  value: string | null
  get: () => string
  set: (color: string | null) => void
  reset: () => void
}

const tintStoreCreator: StateCreator<Store> = (set, get) => ({
  value: null,

  get: () => get().value ?? DEFAULT_TINT_COLOR,
  set: color => set({ value: color }),
  reset: () => set({ value: DEFAULT_TINT_COLOR })
})

export const createTintStore = () => create<Store>()(tintStoreCreator)
export const useTintStore = createTintStore()
