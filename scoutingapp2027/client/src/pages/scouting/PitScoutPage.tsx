import { ScoutIdentity } from '../../components/ScoutIdentity'

export function PitScoutPage() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
      <h2 className="text-xl font-bold text-white">Pit Scout</h2>
      <ScoutIdentity className="mt-1 text-sm text-cyan-300" />
      <p className="mt-1 text-sm text-slate-400">Capture robot setup, dimensions, and hardware details.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {['Drivebase', 'Manipulator', 'Autonomous'].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
            <div className="text-sm font-semibold text-white">{item}</div>
            <div className="mt-2 text-sm text-slate-400">Document build notes and key hardware traits here.</div>
          </div>
        ))}
      </div>
    </section>
  )
}