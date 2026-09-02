import { DirectoryShell } from "../../components/DirectoryShell"
export function MatchScoutPage() {
  return (
    <DirectoryShell title="Match Scout"       subtitle="2637 match scoutinglolol">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-xl font-bold text-white">Match Scout</h2>
          <p className="mt-1 text-sm text-slate-400">Record match performance, notes, and live observations.</p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">Auto routine quality</div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">Defense effectiveness</div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">Endgame consistency</div>
          </div>
        </div>

        <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-950/20">
          <h2 className="text-xl font-bold text-white">Quick actions</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950">Save match scout</button>
            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100">Reset</button>
          </div>
        </aside>
      </section>
    </DirectoryShell>
  )
}