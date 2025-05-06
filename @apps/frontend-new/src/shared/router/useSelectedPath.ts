import { useLocation } from 'react-router-dom'

export const useSelectedPath = (path: string) => {
  const { pathname } = useLocation()

  if (path === '/') {
    return pathname === path
  }

  return pathname === path || pathname.startsWith(path)
}
