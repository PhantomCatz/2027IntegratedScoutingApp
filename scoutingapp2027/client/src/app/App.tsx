import { Navigate, Route, Routes } from 'react-router-dom'
import { DataLookupPage } from '../pages/scouting/DataLookupPage'
//import { DtfPage } from '../pages/lookup/DtfPage'
import { HomePage } from '../pages/home/HomePage'
import { MatchScoutPage } from '../pages/scouting/MatchScoutPage'
//import { PicklistPage } from '../pages/picklist/PicklistPage'
import { PitScoutPage } from '../pages/scouting/PitScoutPage'
import { ScoutingIndexPage } from '../pages/scouting/ScoutingIndexPage'
import { ScoutingLayout } from '../pages/scouting/ScoutingLayout'
import { StrategicScoutPage } from '../pages/scouting/StrategicScoutPage'
import NavBar from '../components/NavBar'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/scouting" element={<ScoutingLayout />}>
          <Route index element={<ScoutingIndexPage />} />
        </Route>
        <Route path="/scouting/matchscout" element={<MatchScoutPage />} />
        <Route path="/scouting/pitscout" element={<PitScoutPage />} />
        <Route path="/scouting/strategicscout" element={<StrategicScoutPage />} />
        <Route path="/scouting/datalookup" element={<DataLookupPage />} />
        {/* <Route path="/dtf" element={<DtfPage />} />
        <Route path="/picklist" element={<PicklistPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
