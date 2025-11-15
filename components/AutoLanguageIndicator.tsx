'use client'

import { useEffect, useState } from 'react'
import { Globe, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { useSmartLanguageDetection, getCountryInfo } from '@/hooks/useSmartLanguageDetection'
import { Language } from '@/lib/translations'

export default function AutoLanguageIndicator() {
  const [isVisible, setIsVisible] = useState(false)
  const { language: currentLanguage, changeLanguage, isAutoDetecting } = useLanguage()
  const { language: detectedLanguage, isLoading, isDetected, country } = useSmartLanguageDetection()

  useEffect(() => {
    // Mostrar el indicador si se detectó un idioma diferente del actual
    if (!isLoading && isDetected && detectedLanguage !== currentLanguage && country) {
      setIsVisible(true)
      // Ocultar automáticamente después de 8 segundos
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 8000)
      
      return () => clearTimeout(timer)
    }
  }, [detectedLanguage, currentLanguage, isLoading, isDetected, country])

  if (!isVisible || isLoading || !isDetected || !detectedLanguage || detectedLanguage === currentLanguage || !country) return null

  const getCountryName = (code: string | null) => {
    if (!code) return 'tu ubicación'
    const info = getCountryInfo(code)
    return info.name
  }

  const getLanguageName = (lang: string) => {
    const names: { [key: string]: string } = {
      'es': 'Español',
      'en': 'Inglés',
      'ru': 'Ruso'
    }
    return names[lang] || lang
  }

  const handleAccept = () => {
    if (detectedLanguage) {
      changeLanguage(detectedLanguage)
    }
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <div className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-firstclass-primary/20 px-4 py-2 animate-fade-in">
      <div className="flex items-center space-x-3">
        <Globe className="w-4 h-4 text-firstclass-primary flex-shrink-0" />
        <div className="flex items-center space-x-2">
          <span className="text-xs text-firstclass-secondary font-medium">
            ¿Ver en {getLanguageName(detectedLanguage)}?
          </span>
          <button
            onClick={handleAccept}
            className="text-xs bg-firstclass-primary text-white px-3 py-1 rounded-full hover:bg-firstclass-primary/90 transition-colors duration-200"
          >
            Cambiar
          </button>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}