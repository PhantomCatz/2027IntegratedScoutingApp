//placeholder tsx file for sitewide header


import type { ReactNode } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ScoutIdentity } from './ScoutIdentity'

export type DirectoryCard = {
  to: string
  label: string
  description: string
}

export type Breadcrumb = {
  to: string
  label: string
}

type DirectoryShellProps = {
  title: string
  subtitle: string
  children: ReactNode
  breadcrumbs?: Breadcrumb[]
}

export function DirectoryShell({ title, subtitle, children, breadcrumbs }: DirectoryShellProps) {
  const navigate = useNavigate()
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    navigate('/')
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/25 backdrop-blur">
          <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-900 hover:text-white"
              >
                Back
              </button>

              <div className="flex items-center gap-3">
                <img
                  src="/favicon.svg"
                  alt="FRC Team 2637 logo"
                  className="h-11 w-11 rounded-2xl border border-white/10 bg-slate-950/60 p-1.5 shadow-lg shadow-black/20"
                />
                <div className="min-w-0">
                  <h1 className="truncate text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h1>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{subtitle}</p>
                  <ScoutIdentity className="mt-1 text-sm text-cyan-300" />
                </div>
              </div>
            </div>
          </div>

          {breadcrumbs ? (
            <nav className="flex flex-wrap gap-2 px-5 py-4 sm:px-6">
              <Link
                to="/"
                className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/30 hover:bg-slate-900 hover:text-white"
              >
                Home
              </Link>
              {breadcrumbs.map((route) => (
                <NavLink
                  key={route.to}
                  to={route.to}
                  className={({ isActive }) =>
                    [
                      'rounded-xl border px-4 py-2 text-sm font-semibold transition',
                      isActive
                        ? 'border-cyan-400/40 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                        : 'border-white/10 bg-slate-900/70 text-slate-300 hover:border-cyan-400/30 hover:bg-slate-900 hover:text-white',
                    ].join(' ')
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>
          ) : null}
        </header>

        {children}
      </section>
    </main>
  )
}

export function DirectoryGrid({ cards }: { cards: DirectoryCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((route) => (
        <NavLink
          key={route.to}
          to={route.to}
          end={route.to === '/' || route.to === '/scouting'}
          className={({ isActive }) =>
            [
              'rounded-2xl border p-4 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-slate-900',
              isActive ? 'border-cyan-400/40 bg-slate-900 text-white' : 'border-white/10 bg-slate-900/70',
            ].join(' ')
          }
        >
          <div className="text-sm font-semibold text-white">{route.label}</div>
          <div className="mt-2 text-sm text-slate-400">{route.description}</div>
        </NavLink>
      ))}
    </div>
  )
}