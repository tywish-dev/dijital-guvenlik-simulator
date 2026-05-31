import { Type, Contrast, VolumeX } from 'lucide-react'
import { useAccessibility } from '../context/accessibility-core'

export default function AccessibilityBar() {
  const { large, contrast, toggleLarge, toggleContrast, speaking, stopSpeaking } =
    useAccessibility()

  const baseBtn =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-colors'

  return (
    <div className="fixed top-16 inset-x-0 z-40 bg-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 h-11 flex items-center justify-between gap-2">
        <span className="text-xs text-slate-500 font-medium hidden sm:inline">
          Erişilebilirlik:
        </span>
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={toggleLarge}
            aria-pressed={large}
            className={`${baseBtn} ${
              large
                ? 'bg-brand-primary text-white border-brand-primary'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Type className="w-4 h-4" />
            Büyük Yazı
          </button>
          <button
            type="button"
            onClick={toggleContrast}
            aria-pressed={contrast}
            className={`${baseBtn} ${
              contrast
                ? 'bg-brand-primary text-white border-brand-primary'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Contrast className="w-4 h-4" />
            Yüksek Kontrast
          </button>
          {speaking && (
            <button
              type="button"
              onClick={stopSpeaking}
              className={`${baseBtn} bg-brand-danger text-white border-brand-danger hover:bg-red-700`}
            >
              <VolumeX className="w-4 h-4" />
              Sesi Durdur
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
