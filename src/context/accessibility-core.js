import { createContext, useContext } from 'react'

export const AccessibilityContext = createContext(null)

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider')
  return ctx
}
