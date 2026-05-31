import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MessageSquare,
  Mail,
  Globe,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Play,
} from 'lucide-react'
import { samples } from '../data/samples'
import ProgressBar from '../components/ProgressBar'
import SpeakButton from '../components/SpeakButton'

const typeMeta = {
  sms: { label: 'SMS Mesajı', icon: MessageSquare },
  email: { label: 'E-posta', icon: Mail },
  url: { label: 'İnternet Adresi', icon: Globe },
}

function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function SpotFakePage() {
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)
  const [deck, setDeck] = useState(() => shuffle(samples))
  const [index, setIndex] = useState(0)
  const [guess, setGuess] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = deck.length
  const item = deck[index]
  const answered = guess !== null
  const meta = typeMeta[item?.type] ?? typeMeta.url
  const Icon = meta.icon

  const handleGuess = (safeGuess) => {
    if (answered) return
    setGuess(safeGuess)
    if (safeGuess === item.isSafe) setScore((s) => s + 1)
  }

  const next = () => {
    if (index + 1 >= total) {
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setGuess(null)
  }

  const restart = () => {
    setDeck(shuffle(samples))
    setIndex(0)
    setGuess(null)
    setScore(0)
    setFinished(false)
    setStarted(true)
  }

  if (!started) {
    const intro =
      'Size sırayla bir SMS, e-posta veya internet adresi göstereceğiz. Her birinin güvenli mi yoksa şüpheli (sahte) mi olduğunu tahmin edin. Cevabınızdan sonra neden öyle olduğunu açıklayacağız.'
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
            <ShieldAlert className="w-9 h-9 text-brand-primary" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Sahte mi, Gerçek mi?</h1>
          <p className="text-slate-500 mt-1">Dolandırıcılığı tanımayı öğrenin</p>
          <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-5 text-left">
            <p className="text-slate-700 leading-relaxed">{intro}</p>
          </div>
          <div className="mt-4 flex justify-center">
            <SpeakButton text={intro} label="Açıklamayı Sesli Dinle" />
          </div>
          <button
            onClick={() => setStarted(true)}
            className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors"
          >
            <Play className="w-5 h-5" />
            Oyuna Başla ({total} Örnek)
          </button>
        </div>
      </div>
    )
  }

  if (finished) {
    const ratio = score / total
    const result =
      ratio < 0.5
        ? { emoji: '😟', msg: 'Biraz daha pratik iyi olur. Açıklamaları tekrar okuyun.' }
        : ratio < 0.8
          ? { emoji: '🙂', msg: 'Güzel! Çoğunu doğru tanıdınız.' }
          : { emoji: '🏆', msg: 'Harika! Dolandırıcılığı tanıma konusunda çok iyisiniz.' }
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 text-center">
          <div className="text-7xl mb-4">{result.emoji}</div>
          <p className="text-slate-500 font-medium">Doğru Tahmin</p>
          <p className="text-6xl font-extrabold text-brand-primary my-2">
            {score}
            <span className="text-3xl text-slate-400">/{total}</span>
          </p>
          <p className="text-lg text-slate-700 mt-4 mb-8">{result.msg}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={restart}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Tekrar Oyna
            </button>
            <button
              onClick={() => navigate('/bilgi')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors"
            >
              Bilgi Kartları
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  const isRight = answered && guess === item.isSafe

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-600">
            Örnek {index + 1} / {total}
          </span>
          <span className="text-sm font-medium text-brand-primary">Doğru: {score}</span>
        </div>
        <ProgressBar value={index + 1} max={total} />
      </div>

      <div key={item.id} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn">
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
          <Icon className="w-5 h-5" />
          <span className="font-medium">{meta.label}</span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs text-slate-400 mb-1">Gönderen: {item.from}</p>
          <p
            className={`text-slate-800 ${
              item.type === 'url' ? 'font-mono break-all' : 'leading-relaxed'
            }`}
          >
            {item.content}
          </p>
        </div>

        <div className="mt-4">
          <SpeakButton text={`${meta.label}. Gönderen: ${item.from}. ${item.content}`} label="Sesli Dinle" />
        </div>

        {!answered ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={() => handleGuess(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 border-brand-success text-brand-success font-semibold hover:bg-green-50 transition-colors"
            >
              <ShieldCheck className="w-5 h-5" />
              Güvenli
            </button>
            <button
              onClick={() => handleGuess(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 border-brand-danger text-brand-danger font-semibold hover:bg-red-50 transition-colors"
            >
              <ShieldAlert className="w-5 h-5" />
              Şüpheli
            </button>
          </div>
        ) : (
          <>
            <div
              className={`mt-6 rounded-xl p-4 animate-slideDown ${
                isRight ? 'border border-green-100 bg-green-50' : 'border border-red-100 bg-red-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {isRight ? (
                  <CheckCircle2 className="w-5 h-5 text-brand-success" />
                ) : (
                  <XCircle className="w-5 h-5 text-brand-danger" />
                )}
                <p className={`font-semibold ${isRight ? 'text-brand-success' : 'text-brand-danger'}`}>
                  {isRight ? 'Doğru tahmin!' : 'Yanlış tahmin'}
                  {' · '}
                  {item.isSafe ? 'Bu güvenli' : 'Bu şüpheli'}
                </p>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.explanation}</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={next}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors animate-fadeIn"
              >
                {index + 1 >= total ? 'Sonucu Gör' : 'Sonraki'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
