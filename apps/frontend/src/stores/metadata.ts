import { create } from 'zustand'

import { DEFAULT_IFD0_OPTIONS, type IFD0Options, type MetadataSettings } from '@server/sharp'

/* eslint no-unused-vars: 0 */
type State = MetadataSettings

interface Store extends State {
  getMetadataSettings: () => MetadataSettings

  toggleKeepMetadata: VoidFunction
  toggleKeepExif: VoidFunction
  toggleKeepICCProfile: VoidFunction

  // ifd0
  setModel: (model: IFD0Options['model']) => void
  setMake: (make: IFD0Options['make']) => void
  setSoftware: (software: IFD0Options['software']) => void
  setDateTime: (dateTime: IFD0Options['dateTime']) => void
  setArtist: (artist: IFD0Options['artist']) => void
  setCopyright: (copyright: IFD0Options['copyright']) => void
  setImageDescription: (imageDescription: IFD0Options['imageDescription']) => void
  resetIfd0: VoidFunction
}

const defaultState: State = {
  keepMetadata: true,
  keepExif: true,
  keepICCProfile: true,

  ifd0: DEFAULT_IFD0_OPTIONS,
  ifd2: {}
} as const

export const useMetadataStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getMetadataSettings: () => ({
    keepMetadata: get().keepMetadata,
    keepExif: get().keepExif,
    keepICCProfile: get().keepICCProfile,

    ifd0: get().ifd0,
    ifd2: {}
  }),

  // Actions
  toggleKeepMetadata: () => set(state => ({ keepMetadata: !state.keepMetadata })),
  toggleKeepExif: () => set(state => ({ keepExif: !state.keepExif })),
  toggleKeepICCProfile: () => set(state => ({ keepICCProfile: !state.keepICCProfile })),

  setModel: model => set({ ifd0: { ...get().ifd0, model } }),
  setMake: make => set({ ifd0: { ...get().ifd0, make } }),
  setSoftware: software => set({ ifd0: { ...get().ifd0, software } }),
  setDateTime: dateTime => set({ ifd0: { ...get().ifd0, dateTime } }),
  setArtist: artist => set({ ifd0: { ...get().ifd0, artist } }),
  setImageDescription: imageDescription => set({ ifd0: { ...get().ifd0, imageDescription } }),
  setCopyright: copyright => set({ ifd0: { ...get().ifd0, copyright } }),
  resetIfd0: () => set({ ifd0: DEFAULT_IFD0_OPTIONS })
}))
