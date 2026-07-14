//page to select from match, pit, strategic, data lookup

const scoutingMetrics = [
  { label: 'Match forms', value: '12', tone: 'bg-emerald-500/15 text-emerald-200 ring-emerald-400/30' },
  { label: 'Pit reports', value: '8', tone: 'bg-sky-500/15 text-sky-200 ring-sky-400/30' },
  { label: 'Strategy notes', value: '21', tone: 'bg-amber-500/15 text-amber-200 ring-amber-400/30' },
]

export function ScoutingIndexPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Scouting summary</h2>
            <p className="mt-1 text-sm text-slate-400">This directory groups all scouting workflows in one place.</p>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Organized
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {scoutingMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg shadow-black/20">
              <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${metric.tone}`}>
                {metric.label}
              </div>
              <div className="mt-4 text-3xl font-black text-white">{metric.value}</div>
              <p className="mt-1 text-sm text-slate-400">Scouting directory status</p>
            </div>
          ))}
        </div>
      </div>

      <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-950/20">
        <h2 className="text-xl font-bold text-white">Directory rule</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Match scout, pit scout, strategic scout, and data lookup all live under the same scouting branch.
        </p>
      </aside>
    </section>
  )
}