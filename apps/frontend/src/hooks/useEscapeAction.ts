import { useEffect } from 'react'

export const useEscapeAction = (
  callback: VoidFunction,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    const handleEscapeKeydown = (ev: KeyboardEvent) => {
      if (ev.key !== 'Escape') return

      callback()
    }

    window.addEventListener('keydown', handleEscapeKeydown, options)

    return () => {
      window.removeEventListener('keydown', handleEscapeKeydown, options)
    }
  }, [callback, options])
}
