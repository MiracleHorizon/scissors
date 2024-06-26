import { PATH_ROOT } from '@site/paths'

export const isPathSelected = (pathname: string, href: string): boolean => {
  if (href === PATH_ROOT) {
    return pathname === href
  }

  return pathname === href || pathname.startsWith(href)
}
