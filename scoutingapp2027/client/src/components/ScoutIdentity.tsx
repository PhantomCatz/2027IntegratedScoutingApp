import { getScoutNameCookie } from '../lib/scoutCookie'

export function ScoutIdentity({ className = '' }: { className?: string }) {
  const name = getScoutNameCookie()
  if (!name) {
    return null
  }

  return <p className={className}>Scout: {name}</p>
}
