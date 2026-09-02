const COOKIE_NAME = 'scoutName'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30

export function setScoutNameCookie(name: string) {
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(name)}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax`
}

export function getScoutNameCookie() {
  const prefix = `${COOKIE_NAME}=`
  const match = document.cookie.split('; ').find((row) => row.startsWith(prefix))
  if (!match) {
    return ''
  }

  return decodeURIComponent(match.slice(prefix.length))
}

export function clearScoutNameCookie() {
  document.cookie = `${COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax`
}
