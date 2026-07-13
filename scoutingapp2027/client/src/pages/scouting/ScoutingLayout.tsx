import { Outlet } from 'react-router-dom'
import { DirectoryGrid, DirectoryShell } from '../../components/DirectoryShell'

const scoutingCards = [
  { to: '/scouting/matchscout', label: 'Match Scout', description: 'Record match performance and notes' },
  { to: '/scouting/pitscout', label: 'Pit Scout', description: 'Capture robot setup and hardware details' },
  { to: '/scouting/strategicscout', label: 'Strategic Scout', description: 'Evaluate alliance fit and matchup strategy' },
  { to: '/scouting/datalookup', label: 'Data Lookup', description: 'Browse saved scouting records quickly' },
]

export function ScoutingLayout() {
  return (
    <DirectoryShell
      title="Scouting Directory"
      subtitle="This is the second-level directory. Pick one of the four scouting pages from here."
      breadcrumbs={[{ to: '/scouting', label: 'Scouting' }]}
    >
      <div className="space-y-6">
        <DirectoryGrid cards={scoutingCards} />
        <Outlet />
      </div>
    </DirectoryShell>
  )
}