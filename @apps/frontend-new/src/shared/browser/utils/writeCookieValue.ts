export const writeCookieValue = ({ key, value }: { key: string; value: string }): void => {
  const cookie = `${key}=${value}; path=/; SameSite=Lax`
  document.cookie = cookie
}
