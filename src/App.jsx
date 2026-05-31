import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AccessibilityProvider } from './context/AccessibilityContext'
import Navbar from './components/Navbar'
import AccessibilityBar from './components/AccessibilityBar'
import SimulatorPage from './pages/SimulatorPage'
import PasswordGeneratorPage from './pages/PasswordGeneratorPage'
import GuideSimPage from './pages/GuideSimPage'
import SpotFakePage from './pages/SpotFakePage'
import InfoCardsPage from './pages/InfoCardsPage'

export default function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <Navbar />
        <AccessibilityBar />
        <main className="pt-[6.75rem] min-h-screen">
          <Routes>
            <Route path="/" element={<SimulatorPage />} />
            <Route path="/sifre" element={<PasswordGeneratorPage />} />
            <Route path="/rehber" element={<GuideSimPage />} />
            <Route path="/tani" element={<SpotFakePage />} />
            <Route path="/bilgi" element={<InfoCardsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AccessibilityProvider>
  )
}
