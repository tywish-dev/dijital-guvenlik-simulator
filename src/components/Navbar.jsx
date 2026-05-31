import { NavLink } from 'react-router-dom'
import { Target, KeyRound, BookOpen, ShieldCheck } from 'lucide-react'

const tabs = [
  { to: '/', label: 'Senaryo Simülatörü', icon: Target, emoji: '🎯' },
  { to: '/sifre', label: 'Şifre Oluşturucu', icon: KeyRound, emoji: '🔐' },
  { to: '/bilgi', label: 'Hızlı Bilgi', icon: BookOpen, emoji: '📚' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2 text-brand-primary font-bold text-lg shrink-0">
          <ShieldCheck className="w-6 h-6" />
          <span className="hidden sm:inline">Dijital Güvenlik</span>
        </div>
        <ul className="flex items-center gap-1 sm:gap-2">
          {tabs.map(({ to, label, icon: Icon, emoji }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'relative flex items-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-lg text-sm transition-colors duration-200',
                    isActive
                      ? 'text-brand-primary font-bold'
                      : 'text-slate-500 font-medium hover:text-slate-800 hover:bg-slate-50',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-base leading-none">{emoji}</span>
                    <Icon className="w-4 h-4 hidden xs:inline sm:hidden" />
                    <span className="hidden sm:inline">{label}</span>
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
