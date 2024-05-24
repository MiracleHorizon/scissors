'use client'

import { usePathname } from 'next/navigation'

import { isPathSelected } from '@helpers/isPathSelected'

export const useSelectedPath = (href: string) => {
  const pathname = usePathname()

  return isPathSelected(pathname, href)
}
