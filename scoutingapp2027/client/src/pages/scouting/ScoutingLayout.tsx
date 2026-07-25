import { Outlet } from 'react-router-dom'

const scoutingCards = [
  { to: '/scouting/matchscout', label: 'Match Scout', description: 'Record match performance and notes' },
  { to: '/scouting/pitscout', label: 'Pit Scout', description: 'Capture robot setup and hardware details' },
  { to: '/scouting/strategicscout', label: 'Strategic Scout', description: 'Evaluate alliance fit and matchup strategy' },
  { to: '/scouting/datalookup', label: 'Data Lookup', description: 'Browse saved scouting records quickly' },
]

export function ScoutingLayout() {
  return (

      <div className="space-y-6">
        <Outlet />
      </div>
  )
}