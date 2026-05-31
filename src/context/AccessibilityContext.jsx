import { useCallback, useEffect, useState } from 'react'
import { AccessibilityContext } from './accessibility-core'

const STORAGE_KEY = 'dgs-a11y'

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { large: false, contrast: false }
    const parsed = JSON.parse(raw)
    return { large: !!parsed.large, contrast: !!parsed.contrast }
  } catch {
    return { large: false, contrast: false }
  }
}

function findTurkishVoice(voices) {
  if (!voices || !voices.length) return null
  const norm = (s) => (s || '').toLowerCase().replace('_', '-')
  return (
    voices.find((v) => norm(v.lang).startsWith('tr')) ||
    voices.find((v) => /t[uü]rk|t[uü]rkçe|turkish/i.test(v.name || '')) ||
    null
  )
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings)
  const [speaking, setSpeaking] = useState(false)
  const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('a11y-large', settings.large)
    root.classList.toggle('a11y-contrast', settings.contrast)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      /* yoksay */
    }
  }, [settings])

  useEffect(() => {
    if (!ttsSupported) return
    // Bazi tarayicilarda sesler tembel yuklenir; onceden tetikle.
    window.speechSynthesis.getVoices()
    const warm = () => window.speechSynthesis.getVoices()
    window.speechSynthesis.addEventListener?.('voiceschanged', warm)
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', warm)
      window.speechSynthesis.cancel()
    }
  }, [ttsSupported])

  const stopSpeaking = useCallback(() => {
    if (!ttsSupported) return
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [ttsSupported])

  const speak = useCallback(
    (text) => {
      if (!ttsSupported || !text) return
      const synth = window.speechSynthesis
      synth.cancel()

      const run = (voices) => {
        const utterance = new SpeechSynthesisUtterance(String(text))
        utterance.lang = 'tr-TR'
        utterance.rate = 0.95
        const trVoice = findTurkishVoice(voices)
        if (trVoice) utterance.voice = trVoice
        utterance.onend = () => setSpeaking(false)
        utterance.onerror = () => setSpeaking(false)
        setSpeaking(true)
        synth.speak(utterance)
      }

      // Sesleri her seferinde taze oku (stale liste Ingilizce sese dusurur).
      const voices = synth.getVoices()
      if (voices.length) {
        run(voices)
      } else {
        // Sesler henuz yuklenmedi: yuklenince yalnizca bir kez calistir.
        let done = false
        const fire = () => {
          if (done) return
          done = true
          synth.removeEventListener?.('voiceschanged', onVoices)
          run(synth.getVoices())
        }
        const onVoices = () => fire()
        synth.addEventListener?.('voiceschanged', onVoices)
        // Guvenlik agi: kisa bir gecikmeyle de dene.
        setTimeout(() => {
          if (!done && synth.getVoices().length) fire()
        }, 300)
      }
    },
    [ttsSupported],
  )

  const toggleLarge = useCallback(() => setSettings((s) => ({ ...s, large: !s.large })), [])
  const toggleContrast = useCallback(
    () => setSettings((s) => ({ ...s, contrast: !s.contrast })),
    [],
  )

  const value = {
    large: settings.large,
    contrast: settings.contrast,
    toggleLarge,
    toggleContrast,
    speak,
    stopSpeaking,
    speaking,
    ttsSupported,
  }

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
}
