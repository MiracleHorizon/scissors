import { useLocation } from 'react-router'

import { isPathSelected } from '@helpers/isPathSelected'

export const useSelectedPath = (href: string) => {
  const { pathname } = useLocation()

  return isPathSelected(pathname, href)
}
