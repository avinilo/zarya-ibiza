'use client'

import { useState, useEffect } from 'react'
import { Language } from '@/lib/translations'

export interface BrowserLanguageDetection {
  language: Language
  isLoading: boolean
  country: string | null
}

export function useBrowserLanguageDetection(): BrowserLanguageDetection {
  const [detection, setDetection] = useState<BrowserLanguageDetection>({
    language: 'en',
    isLoading: true,
    country: null
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const detectLanguage = (): Language => {
      const browserLang = navigator.language || navigator.languages[0] || 'en'
      const langCode = browserLang.toLowerCase().split('-')[0]
      
      switch (langCode) {
        case 'es':
          return 'es'
        case 'ru':
          return 'ru'
        case 'en':
        default:
          return 'en'
      }
    }

    // Detección simplificada basada solo en el navegador
    const detectedLanguage = detectLanguage()
    
    setDetection({
      language: detectedLanguage,
      isLoading: false,
      country: null // No detectamos país por privacidad
    })
  }, [])

  return detection
}

// Función auxiliar para obtener el nombre del idioma detectado
export function getDetectedLanguageInfo(language: Language) {
  const info = {
    es: { name: 'Español', flag: '🇪🇸' },
    en: { name: 'English', flag: '🇺🇸' },
    ru: { name: 'Русский', flag: '🇷🇺' }
  }
  
  return info[language] || { name: 'English', flag: '🇺🇸' }
}