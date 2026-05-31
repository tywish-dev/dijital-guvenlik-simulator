import { NavLink } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

const tabs = [
  { to: '/', label: 'Senaryo', emoji: '🎯' },
  { to: '/sifre', label: 'Şifre', emoji: '🔐' },
  { to: '/rehber', label: 'Rehber', emoji: '🧭' },
  { to: '/tani', label: 'Sahte mi?', emoji: '🕵️' },
  { to: '/bilgi', label: 'Bilgi', emoji: '📚' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-5xl mx-auto px-3 sm:px-4 flex items-center justify-between h-16 gap-2">
        <div className="flex items-center gap-2 text-brand-primary font-bold text-lg shrink-0">
          <ShieldCheck className="w-6 h-6" />
          <span className="hidden lg:inline">Dijital Güvenlik</span>
        </div>
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {tabs.map(({ to, label, emoji }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'relative flex items-center gap-1.5 px-2 sm:px-3 py-2 rounded-lg text-sm transition-colors duration-200',
                    isActive
                      ? 'text-brand-primary font-bold'
                      : 'text-slate-500 font-medium hover:text-slate-800 hover:bg-slate-50',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-base leading-none">{emoji}</span>
                    <span className="hidden md:inline">{label}</span>
                    {isActive && (
                      <span className="absolute left-2 right-2 -bottom-[1px] h-0.5 rounded-full bg-brand-primary" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
