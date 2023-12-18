import { create } from 'zustand'

const DEFAULT_QUALITY = 100
const DEFAULT_EFFORT = 7
const DEFAULT_COLORS = 256

const defaultPalette = {
  quality: null,
  effort: null,
  colors: null
}

const defaultState: State = {
  adaptiveFiltering: false,
  progressive: false,
  compressionLevel: 6,
  // Palette
  palette: false,
  ...defaultPalette
}

export const usePNGFormatStore = create<Store>((set, get) => ({
  ...defaultState,

  toggleAdaptiveFiltering: () => set({ adaptiveFiltering: !get().adaptiveFiltering }),
  toggleProgressive: () => set({ progressive: !get().progressive }),
  setCompressionLevel: (compressionLevel: number) => set({ compressionLevel }),

  togglePalette: () =>
    set(state => {
      const toggledPalette = !state.palette

      if (toggledPalette) {
        return {
          palette: toggledPalette,
          quality: DEFAULT_QUALITY,
          effort: DEFAULT_EFFORT,
          colors: DEFAULT_COLORS
        }
      }

      return {
        palette: toggledPalette,
        ...defaultPalette
      }
    }),
  setQuality: (quality: number) => set({ quality }),

  reset: () => set({ ...defaultState })
}))

interface State {
  adaptiveFiltering: boolean
  progressive: boolean
  compressionLevel: number // 0 - 9
  // Palette
  palette: boolean
  quality: number | null // 1 - 100?
  effort: number | null // 1 - 10. Усилия процессора (1 самый быстрый)
  colors: number | null // 1 - 256.
}

interface Store extends State {
  /* eslint no-unused-vars: 0 */
  toggleAdaptiveFiltering: VoidFunction
  toggleProgressive: VoidFunction
  reset: VoidFunction
  setCompressionLevel: (compressionLevel: number) => void
  // Palette
  togglePalette: (palette: boolean) => void
  setQuality: (quality: number) => void
}
