import { create, type StateCreator } from 'zustand'

import { DEFAULT_GAMMA, type GammaValue } from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store {
  value: GammaValue
  set: (gamma: GammaValue) => void
  reset: () => void
}

const gammaStoreCreator: StateCreator<Store> = set => ({
  value: null,

  set: value => set({ value }),
  reset: () => set({ value: DEFAULT_GAMMA })
})

export const createGammaStore = () => create<Store>()(gammaStoreCreator)
export const useGammaStore = createGammaStore()
