import { useCallback, useEffect, useRef, useState } from 'react'
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

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings)
  const [speaking, setSpeaking] = useState(false)
  const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const voicesRef = useRef([])

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
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices()
    }
    loadVoices()
    window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices)
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', loadVoices)
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
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(String(text))
      utterance.lang = 'tr-TR'
      utterance.rate = 0.95
      const trVoice = voicesRef.current.find((v) => v.lang?.toLowerCase().startsWith('tr'))
      if (trVoice) utterance.voice = trVoice
      utterance.onend = () => setSpeaking(false)
      utterance.onerror = () => setSpeaking(false)
      setSpeaking(true)
      window.speechSynthesis.speak(utterance)
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
