declare interface EyeDropperSelectionOptions {
  signal?: AbortSignal
}

declare interface EyeDropperSelectionResult {
  sRGBHex: string
}

declare interface EyeDropperConstructor {
  new (): EyeDropper
}

declare interface Window {
  EyeDropper?: EyeDropperConstructor | undefined
}

/* eslint no-unused-vars: 0 */
declare class EyeDropper {
  open: (options?: EyeDropperSelectionOptions) => Promise<EyeDropperSelectionResult>
}
