export function extractCookie(name: string): string | null {
  const cookies = document.cookie.split('; ')

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=')

    if (cookieName === name) {
      return decodeURIComponent(cookieValue)
    }
  }

  return null
}

export function setCookie(name: string, value: string, expires?: number) {
  document.cookie = `${name}=${value}; path=/; ${
    expires ? `expires=${new Date(expires).toUTCString()}` : ''
  }`
}
