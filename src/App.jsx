import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SimulatorPage from './pages/SimulatorPage'
import PasswordGeneratorPage from './pages/PasswordGeneratorPage'
import InfoCardsPage from './pages/InfoCardsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16 min-h-screen bg-[#f8fafc]">
        <Routes>
          <Route path="/" element={<SimulatorPage />} />
          <Route path="/sifre" element={<PasswordGeneratorPage />} />
          <Route path="/bilgi" element={<InfoCardsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
