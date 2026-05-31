import { Volume2 } from 'lucide-react'
import { useAccessibility } from '../context/accessibility-core'

export default function SpeakButton({ text, label = 'Sesli Oku', className = '' }) {
  const { speak, ttsSupported } = useAccessibility()
  if (!ttsSupported) return null

  return (
    <button
      type="button"
      onClick={() => speak(text)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-brand-primary bg-blue-50 hover:bg-blue-100 transition-colors ${className}`}
    >
      <Volume2 className="w-4 h-4" />
      {label}
    </button>
  )
}
