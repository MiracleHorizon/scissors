import { create } from 'zustand'

/* eslint-disable no-unused-vars */
interface Store {
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

export const useRequestStore = create<Store>(set => ({
  // State
  isLoading: false,

  // Actions
  setLoading: isLoading => set({ isLoading })
}))
