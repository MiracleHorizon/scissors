import { PATH_ROOT } from '@site/paths'

export function isPathSelected(pathname: string, href: string) {
  if (href === PATH_ROOT) {
    return pathname === href
  }

  return pathname === href || pathname.startsWith(href)
}
