const picklistRows = [
  { rank: 1, team: 'Phantom Catz', auto: 92, defense: 88, climb: 79 },
  { rank: 2, team: 'Volt Brigade', auto: 84, defense: 81, climb: 85 },
  { rank: 3, team: 'Iron Atlas', auto: 76, defense: 90, climb: 72 },
  { rank: 4, team: 'Sky Foundry', auto: 71, defense: 67, climb: 91 },
]

export function PicklistPage() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
      <h2 className="text-xl font-bold text-white">Picklist</h2>
      <p className="mt-1 text-sm text-slate-400">Standalone table view for ranking teams and comparing metrics.</p>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/60">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-4 py-3 font-semibold">Rank</th>
              <th className="px-4 py-3 font-semibold">Team</th>
              <th className="px-4 py-3 font-semibold">Auto</th>
              <th className="px-4 py-3 font-semibold">Defense</th>
              <th className="px-4 py-3 font-semibold">Climb</th>
            </tr>
          </thead>
          <tbody>
            {picklistRows.map((row) => (
              <tr key={row.team} className="border-t border-white/10 text-slate-100">
                <td className="px-4 py-3 font-semibold text-cyan-200">{row.rank}</td>
                <td className="px-4 py-3 font-semibold">{row.team}</td>
                <td className="px-4 py-3 text-slate-300">{row.auto}</td>
                <td className="px-4 py-3 text-slate-300">{row.defense}</td>
                <td className="px-4 py-3 text-slate-300">{row.climb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}