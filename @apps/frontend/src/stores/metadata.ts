import { create } from 'zustand'

import {
  DEFAULT_IFD0_OPTIONS,
  DEFAULT_IFD2_OPTIONS,
  type IFD0Options,
  type IFD2Options,
  type MetadataSettings
} from '@scissors/sharp'
import { isAllObjectValuesEmptyOrFalse } from '@scissors/utility'

interface State extends Omit<MetadataSettings, 'ifd0' | 'ifd2'> {
  ifd0: IFD0Options
  ifd2: IFD2Options
}

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getMetadataSettings: () => MetadataSettings
  getIfd0: () => IFD0Options | null
  getIfd2: () => IFD2Options | null

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

  // ifd2
  setIfd2: (ifd2: Partial<IFD2Options>) => void
  resetIfd2: VoidFunction
}

const defaultState: State = {
  keepMetadata: true,
  keepExif: true,
  keepICCProfile: true,
  ifd0: DEFAULT_IFD0_OPTIONS,
  ifd2: DEFAULT_IFD2_OPTIONS
} as const

export const useMetadataStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getMetadataSettings: () => ({
    keepMetadata: get().keepMetadata,
    keepExif: get().keepExif,
    keepICCProfile: get().keepICCProfile,
    ifd0: get().getIfd0(),
    ifd2: get().getIfd2()
  }),
  getIfd0: () => {
    const ifd0 = get().ifd0
    if (isAllObjectValuesEmptyOrFalse(ifd0)) {
      return null
    }
    return ifd0
  },
  getIfd2: () => {
    const ifd2 = get().ifd2
    if (isAllObjectValuesEmptyOrFalse(ifd2)) {
      return null
    }
    return ifd2
  },

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
  resetIfd0: () => set({ ifd0: DEFAULT_IFD0_OPTIONS }),

  setIfd2: ifd2 => set(state => ({ ifd2: { ...state.ifd2, ...ifd2 } })),
  resetIfd2: () => set({ ifd2: DEFAULT_IFD2_OPTIONS })
}))
