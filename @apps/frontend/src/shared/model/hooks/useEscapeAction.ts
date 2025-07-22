import { useEffect } from 'react'

const ESCAPE_KEY = 'Escape'

export const useEscapeAction = (
  callback: VoidFunction,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    const handleEscapeKeydown = (ev: KeyboardEvent) => {
      if (ev.key !== ESCAPE_KEY) return

      callback()
    }

    document.addEventListener('keydown', handleEscapeKeydown, options)

    return () => {
      document.removeEventListener('keydown', handleEscapeKeydown, options)
    }
  }, [callback, options])
}
