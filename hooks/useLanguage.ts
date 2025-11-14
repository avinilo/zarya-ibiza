'use client'

import { useState, useEffect, useCallback } from 'react'
import { Language, getTranslation } from '@/lib/translations'

let globalLanguage: Language = 'es'
let listeners: Array<(lang: Language) => void> = []

const notifyListeners = (newLanguage: Language) => {
  listeners.forEach(listener => listener(newLanguage))
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage or default to Spanish
    const savedLanguage = localStorage.getItem('zarya-language') as Language
    if (savedLanguage && ['es', 'en', 'ru'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
      globalLanguage = savedLanguage
    }
    setMounted(true)
  }, [])

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
    localStorage.setItem('zarya-language', newLanguage)
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
    mounted
  }
}