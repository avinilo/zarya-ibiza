'use client'

import { useState, useEffect, useCallback } from 'react'
import { Language, getTranslation } from '@/lib/translations'
import { useBrowserLanguageDetection } from './useBrowserLanguageDetection'

// Estado global para compartir entre componentes
let globalLanguage: Language = 'es'
let listeners: Array<(lang: Language) => void> = []

const notifyListeners = (newLanguage: Language) => {
  listeners.forEach(listener => listener(newLanguage))
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)
  const [hasAutoDetected, setHasAutoDetected] = useState(false)
  const { language: detectedLanguage, isLoading } = useBrowserLanguageDetection()

  useEffect(() => {
    // Cargar idioma guardado o usar el detectado
    const savedLanguage = localStorage.getItem('firstclass-language') as Language
    
    if (savedLanguage && ['es', 'en', 'ru'].includes(savedLanguage)) {
      // Usuario ya seleccionó idioma manualmente
      setLanguage(savedLanguage)
      globalLanguage = savedLanguage
      setHasAutoDetected(true)
      setMounted(true)
    } else if (!isLoading && !hasAutoDetected) {
      // Primera visita - usar idioma detectado
      setLanguage(detectedLanguage)
      globalLanguage = detectedLanguage
      localStorage.setItem('firstclass-language', detectedLanguage)
      setHasAutoDetected(true)
      setMounted(true)
    } else if (isLoading) {
      // Mientras carga, usar español como fallback
      setLanguage('es')
      globalLanguage = 'es'
      setMounted(true)
    }
  }, [detectedLanguage, isLoading, hasAutoDetected])

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
    setLanguage(newLanguage)
    globalLanguage = newLanguage
    localStorage.setItem('firstclass-language', newLanguage)
    setHasAutoDetected(true)
    notifyListeners(newLanguage)
  }, [])

  const t = (key: string): string => {
    if (!mounted) {
      // Durante SSR y carga inicial, usar español
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