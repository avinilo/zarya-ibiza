'use client'

import { useState, useEffect, useCallback } from 'react'
import { Language, getTranslation } from '@/lib/translations'
import { useSmartLanguageDetection, getCountryInfo } from '@/hooks/useSmartLanguageDetection'

let globalLanguage: Language = 'es'
let listeners: Array<(lang: Language) => void> = []

const notifyListeners = (newLanguage: Language) => {
  listeners.forEach(listener => listener(newLanguage))
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)
  const [hasAutoDetected, setHasAutoDetected] = useState(false)
  const { language: detectedLanguage, isLoading, isDetected, country } = useSmartLanguageDetection()

  useEffect(() => {
    // Load saved language from localStorage or detect automatically
    const savedLanguage = localStorage.getItem('firstclass-language') as Language
    
    if (savedLanguage && ['es', 'en', 'ru'].includes(savedLanguage)) {
      // Si el usuario ya ha seleccionado un idioma manualmente, usar ese
      setLanguage(savedLanguage)
      globalLanguage = savedLanguage
      setHasAutoDetected(true) // Marcar como que ya tenemos un idioma establecido
      setMounted(true)
    } else if (!isLoading && !hasAutoDetected) {
      // Si no hay idioma guardado y la detección automática terminó, usar el detectado
      setLanguage(detectedLanguage)
      globalLanguage = detectedLanguage
      setMounted(true)
      // No guardamos en localStorage para permitir que el usuario cambie después
    } else if (isLoading) {
      // Mientras se detecta la ubicación, usar el idioma del navegador como fallback
      const browserLang = navigator.language?.toLowerCase().split('-')[0] === 'es' ? 'es' : 
                         navigator.language?.toLowerCase().split('-')[0] === 'ru' ? 'ru' : 'en'
      setLanguage(browserLang)
      globalLanguage = browserLang
      setMounted(true)
    }
  }, [detectedLanguage, isLoading, hasAutoDetected])

  useEffect(() => {
    // Subscribe to global language changes
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
    setLanguage(newLanguage)
    globalLanguage = newLanguage
    localStorage.setItem('firstclass-language', newLanguage)
    setHasAutoDetected(true) // Marcar como que el usuario ha seleccionado manualmente
    notifyListeners(newLanguage)
  }, [])

  const t = (key: string): string => {
    if (!mounted) {
      // Return Spanish translation during SSR and initial client render
      return getTranslation(key, 'es')
    }
    return getTranslation(key, language)
  }

  return {
    language,
    changeLanguage,
    t,
    mounted,
    isAutoDetecting: isLoading && !hasAutoDetected
  }
}