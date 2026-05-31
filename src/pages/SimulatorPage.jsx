import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, KeyRound, Lightbulb } from 'lucide-react'
import { questions } from '../data/questions'
import ProgressBar from '../components/ProgressBar'

export default function SimulatorPage() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const total = questions.length
  const q = questions[currentQuestion]

  const handleAnswer = (index) => {
    if (showExplanation) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === q.correct) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (currentQuestion + 1 >= total) {
      setIsFinished(true)
      return
    }
    setCurrentQuestion((c) => c + 1)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setIsFinished(false)
  }

  if (isFinished) {
    const result =
      score <= 2
        ? { emoji: '😟', msg: 'Dijital güvenlik konusunda daha fazla bilgi edinmeniz gerekiyor.' }
        : score <= 4
          ? { emoji: '🙂', msg: 'İyi ama geliştirebilirsiniz!' }
          : { emoji: '🏆', msg: 'Tebrikler! Dijital güvenlik konusunda bilinçlisiniz!' }

    return (
      <div className="max-w-2xl mx-auto px-4 py-10 animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 text-center">
          <div className="text-7xl mb-4">{result.emoji}</div>
          <p className="text-slate-500 font-medium">Toplam Puanınız</p>
          <p className="text-6xl font-extrabold text-brand-primary my-2">
            {score}
            <span className="text-3xl text-slate-400">/{total}</span>
          </p>
          <p className="text-lg text-slate-700 mt-4 mb-8">{result.msg}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Tekrar Dene
            </button>
            <button
              onClick={() => navigate('/sifre')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors"
            >
              <KeyRound className="w-5 h-5" />
              Şifre Aracına Git
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-600">
            Soru {currentQuestion + 1} / {total}
          </span>
          <span className="text-sm font-medium text-brand-primary">Puan: {score}</span>
        </div>
        <ProgressBar value={currentQuestion + 1} max={total} />
      </div>

      <div key={q.id} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">{q.question}</h2>

        <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 mb-6">
          <p className="italic text-slate-600 text-sm sm:text-base">{q.scenario}</p>
        </div>

        <div className="space-y-3">
          {q.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === q.correct
            let styles =
              'border-slate-200 bg-white hover:border-brand-primary hover:bg-blue-50 text-slate-700'

            if (showExplanation) {
              if (isCorrect) {
                styles = 'border-brand-success bg-green-50 text-green-800'
              } else if (isSelected) {
                styles = 'border-brand-danger bg-red-50 text-red-800'
              } else {
                styles = 'border-slate-200 bg-white text-slate-400'
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full flex items-center justify-between gap-3 text-left px-4 py-3.5 rounded-xl border-2 font-medium transition-all duration-200 disabled:cursor-default ${styles}`}
              >
                <span>{option}</span>
                {showExplanation && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-brand-success shrink-0" />
                )}
                {showExplanation && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-brand-danger shrink-0" />
                )}
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 animate-slideDown">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-primary mb-1">Açıklama</p>
                <p className="text-slate-700 text-sm leading-relaxed">{q.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {showExplanation && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-primary hover:bg-blue-800 transition-colors animate-fadeIn"
            >
              {currentQuestion + 1 >= total ? 'Sonuçları Gör' : 'Sonraki Soru'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
