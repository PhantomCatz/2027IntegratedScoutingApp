import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { getScoutNameCookie, setScoutNameCookie } from '../../lib/scoutCookie'

const LOGIN_PASSWORD = '1111'

export function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState(() => getScoutNameCookie())
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (name.trim().length < 2) {
      setError('please type in your name')
      return
    }

    if (password !== LOGIN_PASSWORD) {
      setError('Incorrect password')
      return
    }

    setError('')
    const scoutName = name.trim()
    sessionStorage.setItem('signedIn', '1')
    sessionStorage.setItem('scoutName', scoutName)
    setScoutNameCookie(scoutName)
    navigate('/')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-8 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col items-center"
      >
        <img
          src="/favicon.svg"
          alt="FRC Team 2637"
          className="h-28 w-28 brightness-0 invert"
        />

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Strategy App</h1>

        <label className="mt-14 w-full text-left text-base">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              setError('')
            }}
            autoComplete="username"
            className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-3 text-white outline-none focus:border-white/30"
          />
        </label>

        <label className="mt-5 w-full text-left text-base">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              setError('')
            }}
            autoComplete="current-password"
            className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#2a2a2a] px-3 text-white outline-none focus:border-white/30"
          />
        </label>

        {error ? (
          <p className="mt-3 w-full text-left text-sm text-red-400">{error}</p>
        ) : null}

        <button
          type="submit"
          className="mt-8 h-12 w-full rounded-lg bg-white text-base font-medium text-black transition hover:bg-zinc-200"
        >
          Sign In
        </button>
      </form>
    </main>
  )
}
