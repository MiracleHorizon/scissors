import type { ConvertSettings } from '@libs/Sharp'

export type Store = Settings & Computed & Actions

export type Settings = Pick<ConvertSettings, 'flip' | 'flop' | 'grayscale'>

interface Computed {
  getConvertSettings: () => Settings
}

/* eslint no-unused-vars: 0 */
interface Actions {
  reset: VoidFunction

  toggleFlip: VoidFunction
  toggleFlop: VoidFunction
  toggleGrayscale: VoidFunction
}
