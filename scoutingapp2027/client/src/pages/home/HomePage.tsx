
const homeCards = [
  { to: '/scouting', label: 'Scouting', description: 'Match scout, pit scout, strategic scout, and data lookup' },
  { to: '/dtf', label: 'DTF', description: 'Standalone line graph dashboard' },
  { to: '/picklist', label: 'Picklist', description: 'Standalone selection table' },
]

export function HomePage() {
  return (

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-xl font-bold text-white">Workspace map</h2>
          <p className="mt-1 text-sm text-slate-400">This page acts like a directory rather than a dashboard.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {homeCards.map((card) => (
              <div key={card.to} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <div className="text-sm font-semibold text-white">{card.label}</div>
                <div className="mt-2 text-sm text-slate-400">{card.description}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-950/20">
          <h2 className="text-xl font-bold text-white">Navigation hint</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Go into Scouting if you want a nested directory with multiple scout views. DTF and Picklist are direct pages.
          </p>
        </aside>
      </section>
  )
}