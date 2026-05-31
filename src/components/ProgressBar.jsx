export default function ProgressBar({ value = 0, max = 100 }) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0

  return (
    <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
      <div
        className="h-full rounded-full bg-brand-primary transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
