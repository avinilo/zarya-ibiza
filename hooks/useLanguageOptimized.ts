'use client'

import { useState, useEffect, useCallback } from 'react'
import { Language, getTranslation } from '@/lib/translations'
import { 
  SUPPORTED_LANGUAGES, 
  LANGUAGE_DETECTION, 
  LANGUAGE_INFO,
  STORAGE_KEYS 
} from '@/lib/i18n-config'

// Estado global para compartir entre componentes
let globalLanguage: Language = LANGUAGE_DETECTION.DEFAULT_LANGUAGE
let listeners: Array<(lang: Language) => void> = []

const notifyListeners = (newLanguage: Language) => {
  listeners.forEach(listener => listener(newLanguage))
}

// Detectar idioma del navegador
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return LANGUAGE_DETECTION.DEFAULT_LANGUAGE
  
  const browserLang = navigator.language || navigator.languages[0] || 'en'
  return LANGUAGE_DETECTION.BROWSER_LANGUAGE_MAP[browserLang] || LANGUAGE_DETECTION.DEFAULT_LANGUAGE
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(LANGUAGE_DETECTION.DEFAULT_LANGUAGE)
  const [mounted, setMounted] = useState(false)
  const [hasAutoDetected, setHasAutoDetected] = useState(false)

  useEffect(() => {
    // Cargar idioma guardado o detectar automáticamente
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language
    
    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      // Usuario ya seleccionó idioma manualmente
      setLanguage(savedLanguage)
      globalLanguage = savedLanguage
      setHasAutoDetected(true)
      setMounted(true)
    } else {
      // Primera visita - detectar idioma del navegador
      const detectedLanguage = detectBrowserLanguage()
      setLanguage(detectedLanguage)
      globalLanguage = detectedLanguage
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, detectedLanguage)
      setHasAutoDetected(true)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    // Suscribirse a cambios globales de idioma
    const listener = (newLanguage: Language) => {
      setLanguage(newLanguage)
    }
    listeners.push(listener)
    
    return () => {
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  const changeLanguage = useCallback((newLanguage: Language) => {
    if (!SUPPORTED_LANGUAGES.includes(newLanguage)) return
    
    setLanguage(newLanguage)
    globalLanguage = newLanguage
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, newLanguage)
    setHasAutoDetected(true)
    notifyListeners(newLanguage)
  }, [])

  const t = (key: string): string => {
    if (!mounted) {
      // Durante SSR y carga inicial, usar el idioma por defecto
      return getTranslation(key, LANGUAGE_DETECTION.DEFAULT_LANGUAGE)
    }
    return getTranslation(key, language)
  }

  return {
    language,
    changeLanguage,
    t,
    mounted,
    isAutoDetecting: !mounted,
    languageInfo: LANGUAGE_INFO[language],
    detectedLanguage: detectBrowserLanguage()
  }
}