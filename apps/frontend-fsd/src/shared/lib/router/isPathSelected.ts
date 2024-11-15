export const isPathSelected = (pathname: string, href: string): boolean => {
  if (href === '/') {
    return pathname === href
  }

  return pathname === href || pathname.startsWith(href)
}
