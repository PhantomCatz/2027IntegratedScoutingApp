import type { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DataLookupPage } from '../pages/scouting/DataLookupPage'
import { HomePage } from '../pages/home/HomePage'
import { Login } from '../pages/home/Login'
import { MatchScoutPage } from '../pages/scouting/MatchScoutPage'
import { PitScoutPage } from '../pages/scouting/PitScoutPage'
import { ScoutingIndexPage } from '../pages/scouting/ScoutingIndexPage'
import { ScoutingLayout } from '../pages/scouting/ScoutingLayout'
import { StrategicScoutPage } from '../pages/scouting/StrategicScoutPage'
import NavBar from '../components/NavBar'

function RequireAuth({ children }: { children: ReactNode }) {
  const signedIn = sessionStorage.getItem('signedIn') === '1'
  if (!signedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <NavBar />
          </RequireAuth>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/scouting" element={<ScoutingLayout />}>
          <Route index element={<ScoutingIndexPage />} />
        </Route>
        <Route path="/scouting/matchscout" element={<MatchScoutPage />} />
        <Route path="/scouting/pitscout" element={<PitScoutPage />} />
        <Route path="/scouting/strategicscout" element={<StrategicScoutPage />} />
        <Route path="/scouting/datalookup" element={<DataLookupPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
