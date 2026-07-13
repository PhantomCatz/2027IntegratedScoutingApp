const lineGraphPoints = [
  { label: 'Mon', value: 18 },
  { label: 'Tue', value: 32 },
  { label: 'Wed', value: 24 },
  { label: 'Thu', value: 44 },
  { label: 'Fri', value: 38 },
  { label: 'Sat', value: 54 },
  { label: 'Sun', value: 48 },
]

function getGraphGeometry(points: Array<{ value: number }>) {
  const width = 560
  const height = 240
  const maxValue = Math.max(...points.map((point) => point.value))
  const minValue = Math.min(...points.map((point) => point.value))
  const xStep = points.length > 1 ? width / (points.length - 1) : 0

  const geometry = points.map((point, index) => {
    const x = index * xStep
    const normalized = (point.value - minValue) / (maxValue - minValue || 1)
    const y = height - normalized * height

    return { x, y }
  })

  const path = geometry
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(' ')

  return { geometry, path }
}

export function DtfPage() {
  const graph = getGraphGeometry(lineGraphPoints)

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Trend line</h2>
            <p className="mt-1 text-sm text-slate-400">A lightweight SVG line graph for DTF.</p>
          </div>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Live view
          </span>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
          <svg viewBox="0 0 560 240" className="h-auto w-full">
            <defs>
              <linearGradient id="dtfLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            {[0, 60, 120, 180, 240].map((line) => (
              <line key={line} x1="0" x2="560" y1={line} y2={line} stroke="rgba(255,255,255,0.08)" />
            ))}
            <path d={graph.path} fill="none" stroke="url(#dtfLine)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {graph.geometry.map((point, index) => (
              <circle key={lineGraphPoints[index].label} cx={point.x} cy={point.y} r="5" fill="#22d3ee" />
            ))}
          </svg>
        </div>
      </div>

      <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-950/20">
        <h2 className="text-xl font-bold text-white">Daily totals</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {lineGraphPoints.map((point) => (
            <div key={point.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <div className="text-sm font-semibold text-white">{point.label}</div>
              <div className="mt-2 text-2xl font-black text-cyan-200">{point.value}</div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}