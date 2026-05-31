import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Globe,
  Search,
  Lock,
  Keyboard,
  Smartphone,
  LogOut,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Info,
  PartyPopper,
} from 'lucide-react'
import { guideSteps } from '../data/guideSteps'
import ProgressBar from '../components/ProgressBar'
import SpeakButton from '../components/SpeakButton'

const icons = {
  globe: Globe,
  search: Search,
  lock: Lock,
  keyboard: Keyboard,
  smartphone: Smartphone,
  logout: LogOut,
}

export default function GuideSimPage() {
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)
  const [choice, setChoice] = useState(null)
  const [finished, setFinished] = useState(false)

  const total = guideSteps.length
  const step = guideSteps[stepIndex]
  const Icon = icons[step?.icon] ?? Info
  const hasDecision = !!step?.decision
  const answered = choice !== null

  const goNext = () => {
    if (stepIndex + 1 >= total) {
      setFinished(true)
      return
    }
    setStepIndex((i) => i + 1)
    setChoice(null)
  }

  const restart = () => {
    setStepIndex(0)
    setChoice(null)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 flex items-center justify-center mb-4">
            <PartyPopper className="w-9 h-9 text-brand-success" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Rehberi Tamamladınız!</h1>
          <p className="text-slate-600 mt-3 leading-relaxed">
            Artık e-Devlet’e güvenle nasıl giriş yapacağınızı biliyorsunuz. Bu adımları her zaman
            uygulayın: adresi kendiniz yazın, kilit işaretini kontrol edin ve kodunuzu kimseyle
            paylaşmayın.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={restart}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Baştan Başla
            </button>
            <button
              onClick={() => navigate('/tani')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors"
            >
              Sahte mi Gerçek mi?
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  const speechText = hasDecision
    ? `${step.title}. ${step.body}. ${step.decision.question}`
    : `${step.title}. ${step.body}${step.tip ? '. İpucu: ' + step.tip : ''}`

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">🧭 Güvenli Giriş Rehberi</h1>
        <p className="text-slate-500 mt-1">e-Devlet’e adım adım güvenle girin</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-600">
            Adım {stepIndex + 1} / {total}
          </span>
        </div>
        <ProgressBar value={stepIndex + 1} max={total} />
      </div>

      <div key={step.id} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-brand-primary" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">{step.title}</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">{step.body}</p>

        {step.tip && (
          <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-3 flex items-start gap-2">
            <Info className="w-5 h-5 text-brand-warning shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{step.tip}</p>
          </div>
        )}

        <div className="mt-4">
          <SpeakButton text={speechText} label="Adımı Sesli Dinle" />
        </div>

        {hasDecision && (
          <div className="mt-6">
            <p className="font-semibold text-slate-800 mb-3">{step.decision.question}</p>
            <div className="space-y-3">
              {step.decision.options.map((opt, index) => {
                const isSelected = choice === index
                let styles =
                  'border-slate-200 bg-white hover:border-brand-primary hover:bg-blue-50 text-slate-700'
                if (answered) {
                  if (opt.safe) styles = 'border-brand-success bg-green-50 text-green-800'
                  else if (isSelected) styles = 'border-brand-danger bg-red-50 text-red-800'
                  else styles = 'border-slate-200 bg-white text-slate-400'
                }
                return (
                  <button
                    key={index}
                    onClick={() => !answered && setChoice(index)}
                    disabled={answered}
                    className={`w-full flex items-center justify-between gap-3 text-left px-4 py-3.5 rounded-xl border-2 font-medium transition-all duration-200 disabled:cursor-default ${styles}`}
                  >
                    <span>{opt.text}</span>
                    {answered && opt.safe && (
                      <CheckCircle2 className="w-5 h-5 text-brand-success shrink-0" />
                    )}
                    {answered && isSelected && !opt.safe && (
                      <XCircle className="w-5 h-5 text-brand-danger shrink-0" />
                    )}
                  </button>
                )
              })}
            </div>

            {answered && (
              <div
                className={`mt-4 rounded-xl p-4 animate-slideDown ${
                  step.decision.options[choice].safe
                    ? 'border border-green-100 bg-green-50'
                    : 'border border-red-100 bg-red-50'
                }`}
              >
                <p
                  className={`text-sm leading-relaxed ${
                    step.decision.options[choice].safe ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {step.decision.options[choice].safe
                    ? step.decision.feedbackCorrect
                    : step.decision.feedbackWrong}
                </p>
              </div>
            )}
          </div>
        )}

        {(!hasDecision || answered) && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={goNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors animate-fadeIn"
            >
              {stepIndex + 1 >= total ? 'Bitir' : 'Devam Et'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
