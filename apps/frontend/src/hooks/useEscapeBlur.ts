'use client'

import type { RefObject } from 'react'

import { useEscapeAction } from './useEscapeAction'

export const useEscapeBlur = <T extends HTMLElement>({ ref, options }: Params<T>) => {
  useEscapeAction(() => {
    if (!ref.current) return

    ref.current.blur()
  }, options)
}

interface Params<T extends HTMLElement> {
  ref: RefObject<T>
  options?: boolean | AddEventListenerOptions
}
