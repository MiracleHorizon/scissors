import { type RefObject, useEffect } from 'react'

export function useEscapeBlur<T extends HTMLElement>({ ref, options }: Params<T>) {
  useEffect(() => {
    const handleEscapeKeydown = (ev: KeyboardEvent) => {
      if (ev.key !== 'Escape' || !ref.current) return

      ref.current.blur()
    }

    window.addEventListener('keydown', handleEscapeKeydown, options)

    return () => {
      window.removeEventListener('keydown', handleEscapeKeydown, options)
    }
  }, [ref, options])
}

interface Params<T extends HTMLElement> {
  ref: RefObject<T>
  options?: boolean | AddEventListenerOptions
}
