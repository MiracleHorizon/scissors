'use client'

import { usePathname } from 'next/navigation'

import { PATH_ROOT } from '@site/paths'

export function useSelectedPath(href: string) {
  const pathname = usePathname()

  if (href === PATH_ROOT) {
    return pathname === href
  }

  return pathname === href || pathname.startsWith(href)
}
