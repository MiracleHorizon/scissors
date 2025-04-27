import type { RefObject } from 'react'

import { useEscapeAction } from './useEscapeAction'

interface Params<El extends HTMLElement> {
  ref: RefObject<El>
  options?: boolean | AddEventListenerOptions
}

export const useEscapeBlur = <El extends HTMLElement>({ ref, options }: Params<El>) => {
  useEscapeAction(() => {
    if (!ref.current) return

    ref.current.blur()
  }, options)
}
