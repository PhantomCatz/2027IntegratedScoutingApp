import { ScoutIdentity } from '../../components/ScoutIdentity'

export function DataLookupPage() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
      <h2 className="text-xl font-bold text-white">Data Lookup</h2>
      <ScoutIdentity className="mt-1 text-sm text-cyan-300" />
      <p className="mt-1 text-sm text-slate-400">Search and review saved scouting records.</p>
      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-400">
        Data query results will appear here.
      </div>
    </section>
  )
}