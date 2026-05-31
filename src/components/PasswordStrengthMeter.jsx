export function calculateStrength(password) {
  if (!password) return 0
  let score = 0

  if (password.length >= 12) score += 1
  if (password.length >= 16) score += 1

  const hasUpper = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSymbol = /[^A-Za-z0-9]/.test(password)

  if (hasUpper && hasLower && hasNumber) score += 1
  if (hasSymbol) score += 1

  return score
}

const levels = {
  0: { label: 'Zayıf', color: 'bg-brand-danger', text: 'text-brand-danger', bars: 1 },
  1: { label: 'Zayıf', color: 'bg-brand-danger', text: 'text-brand-danger', bars: 1 },
  2: { label: 'Orta', color: 'bg-brand-warning', text: 'text-brand-warning', bars: 2 },
  3: { label: 'Güçlü', color: 'bg-yellow-400', text: 'text-yellow-600', bars: 3 },
  4: { label: 'Çok Güçlü', color: 'bg-brand-success', text: 'text-brand-success', bars: 4 },
}

export default function PasswordStrengthMeter({ password = '' }) {
  const score = calculateStrength(password)
  const level = levels[score]

  return (
    <div className="mt-4">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={[
              'h-2 flex-1 rounded-full transition-colors duration-300',
              password && i < level.bars ? level.color : 'bg-slate-200',
            ].join(' ')}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="text-slate-500">Güç:</span>
        <span className={['font-semibold', password ? level.text : 'text-slate-400'].join(' ')}>
          {password ? level.label : '—'}
        </span>
      </div>
    </div>
  )
}
