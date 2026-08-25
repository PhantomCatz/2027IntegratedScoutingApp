import { ScoutIdentity } from '../../components/ScoutIdentity'

export function StrategicScoutPage() {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <ScoutIdentity className="text-sm text-cyan-300 lg:col-span-3" />
      {['Priority partners', 'Counter picks', 'Playoff ceiling'].map((item) => (
        <article key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-lg font-bold text-white">{item}</h2>
          <p className="mt-2 text-sm text-slate-400">Use this space for strategic scouting conclusions and ranking logic.</p>
        </article>
      ))}
    </section>
  )
}