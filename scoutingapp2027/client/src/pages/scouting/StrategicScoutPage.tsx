import {useState} from 'react';
import {MatchInfo} from '../../components/MatchInfo'

export function StrategicScoutPage() {
  
  const [previousScout, setPreviousScout] = useState('');
  const [stratComments, setStratComments] = useState('');
  
  const previouslyScoutedMembers: {label: string, value: string} [] = [
    {label: "'example dataset'", value: "'example dataset'"},
    {label: "'example dataset'", value: "'example dataset'"},
  ]
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      
        <MatchInfo />

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-lg font-bold text-white">Previously Scouted</h2>
          <select
          value={previousScout}
          onChange={(e)=> setPreviousScout(e.target.value)}
          className ="mt-2 w-full rounded-xl bg-slate-800 text-white border border-white p-3 text-sm text-slate-200 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          >
            {previouslyScoutedMembers.map((option) => (
              <option key = {option.value} value= {option.value}>
              {option.label}
              </option>
            ))}
          </select>
          
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <h2 className="text-lg font-bold text-white">Strat Comments</h2>
          <textarea 
          rows={6}
          cols={100}
          className="mt-2 text-sm text-white text-slate-400 bg-slate-800 rounded-2xl border border-white focus:border-white"
          value= {stratComments}
          onChange={(e) => setStratComments(e.target.value)}/>
        </article>
    </section>
  )
}

