import { useState } from 'react'
import { RefreshCw, Copy, Check } from 'lucide-react'
import PasswordStrengthMeter from '../components/PasswordStrengthMeter'

const SETS = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.<>?/',
}

const tips = [
  'En az 12 karakter kullanın',
  'Büyük-küçük harf, rakam ve sembol karıştırın',
  'Kişisel bilgi (doğum tarihi, isim) kullanmayın',
  'Her hesap için farklı şifre oluşturun',
  'Şifrelerinizi Bitwarden gibi bir yöneticide saklayın',
]

function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-slate-300 transition-colors">
      <span className="font-medium text-slate-700 text-sm">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={[
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200',
          checked ? 'bg-brand-primary' : 'bg-slate-300',
        ].join(' ')}
      >
        <span
          className={[
            'inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200',
            checked ? 'translate-x-6' : 'translate-x-1',
          ].join(' ')}
        />
      </button>
    </label>
  )
}

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16)
  const [useUpper, setUseUpper] = useState(true)
  const [useLower, setUseLower] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let pool = ''
    const required = []
    if (useUpper) {
      pool += SETS.upper
      required.push(SETS.upper)
    }
    if (useLower) {
      pool += SETS.lower
      required.push(SETS.lower)
    }
    if (useNumbers) {
      pool += SETS.numbers
      required.push(SETS.numbers)
    }
    if (useSymbols) {
      pool += SETS.symbols
      required.push(SETS.symbols)
    }

    if (!pool) {
      setPassword('')
      return
    }

    const pick = (set) => set[Math.floor(Math.random() * set.length)]
    const chars = required.map((set) => pick(set))
    while (chars.length < length) {
      chars.push(pick(pool))
    }

    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[chars[i], chars[j]] = [chars[j], chars[i]]
    }

    setPassword(chars.slice(0, length).join(''))
    setCopied(false)
  }

  const handleCopy = async () => {
    if (!password) return
    try {
      await navigator.clipboard.writeText(password)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = password
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const noTypeSelected = !useUpper && !useLower && !useNumbers && !useSymbols

  return (
    <div className="max-w-[600px] mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">🔐 Şifre Oluşturucu</h1>
        <p className="text-slate-500 mt-1">Güçlü ve benzersiz şifreler üretin</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="font-medium text-slate-700 text-sm">Şifre Uzunluğu</label>
            <span className="inline-flex items-center justify-center min-w-[3rem] px-3 py-1 rounded-lg bg-blue-50 text-brand-primary font-bold">
              {length}
            </span>
          </div>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-brand-primary cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>8</span>
            <span>32</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <Toggle label="Büyük Harf (A-Z)" checked={useUpper} onChange={setUseUpper} />
          <Toggle label="Küçük Harf (a-z)" checked={useLower} onChange={setUseLower} />
          <Toggle label="Rakamlar (0-9)" checked={useNumbers} onChange={setUseNumbers} />
          <Toggle label="Semboller (!@#$)" checked={useSymbols} onChange={setUseSymbols} />
        </div>

        <button
          onClick={generatePassword}
          disabled={noTypeSelected}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className="w-5 h-5" />
          Şifre Oluştur
        </button>

        {noTypeSelected && (
          <p className="text-center text-sm text-brand-danger mt-3">
            En az bir karakter türü seçmelisiniz.
          </p>
        )}

        <div className="mt-6 flex items-stretch gap-2">
          <div className="flex-1 min-h-[3.5rem] flex items-center px-4 rounded-xl border-2 border-slate-200 bg-slate-50 font-mono text-base sm:text-lg break-all text-slate-800">
            {password || <span className="text-slate-400 font-sans text-sm">Henüz şifre oluşturulmadı</span>}
          </div>
          <button
            onClick={handleCopy}
            disabled={!password}
            aria-label="Şifreyi kopyala"
            className={[
              'shrink-0 w-14 rounded-xl flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
              copied ? 'bg-brand-success' : 'bg-slate-700 hover:bg-slate-800',
            ].join(' ')}
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

        {copied && (
          <p className="text-right text-sm font-medium text-brand-success mt-2 animate-fadeIn">
            Kopyaldı!
          </p>
        )}

        <PasswordStrengthMeter password={password} />
      </div>

      <div className="mt-6 bg-white rounded-2xl shadow-md p-6 animate-fadeIn">
        <h3 className="font-bold text-slate-800 mb-3">Güçlü Şifre İpuçları</h3>
        <ul className="space-y-2">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-brand-success">✅</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
