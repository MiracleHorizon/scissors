import type { RefObject } from 'react'

import { useEscapeAction } from './useEscapeAction'

export const useEscapeBlur = <Element extends HTMLElement>({
  ref,
  options
}: {
  ref: RefObject<Element>
  options?: boolean | AddEventListenerOptions
}) => {
  useEscapeAction(() => {
    if (!ref.current) return

    ref.current.blur()
  }, options)
}
