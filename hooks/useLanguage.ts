'use client'

import { useState, useEffect } from 'react'
import { Language, getTranslation } from '@/lib/translations'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage or default to Spanish
    const savedLanguage = localStorage.getItem('zarya-language') as Language
    if (savedLanguage && ['es', 'en', 'ru'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
    setMounted(true)
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('zarya-language', newLanguage)
  }

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