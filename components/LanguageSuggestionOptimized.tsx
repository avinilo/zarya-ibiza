'use client'

import { useEffect, useState } from 'react'
import { Globe, X, Check } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguageOptimized'
import { Language, SUPPORTED_LANGUAGES } from '@/lib/i18n-config'

interface LanguageSuggestionProps {
  delay?: number
  autoHide?: number
}

export default function LanguageSuggestion({ delay = 2000, autoHide = 8000 }: LanguageSuggestionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { language: currentLang, changeLanguage, detectedLanguage } = useLanguage()
  
  // Verificar si ya se descartó esta sugerencia
  const getDismissKey = (lang: Language) => `language-suggestion-dismissed-${lang}`
  
  useEffect(() => {
    if (currentLang === detectedLanguage) {
      // Ya está en el idioma correcto, no mostrar sugerencia
      setIsVisible(false)
      return
    }
    
    // Verificar si el usuario ya descartó esta sugerencia
    const dismissed = localStorage.getItem(getDismissKey(detectedLanguage))
    if (dismissed) {
      setIsVisible(false)
      return
    }
    
    // Mostrar sugerencia con delay para no ser intrusivo
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    
    // Auto-ocultar después del tiempo especificado
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, autoHide)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [currentLang, detectedLanguage, delay, autoHide])
  
  const handleAccept = () => {
    changeLanguage(detectedLanguage)
    setIsVisible(false)
  }
  
  const handleDismiss = () => {
    // Guardar que el usuario descartó esta sugerencia para este idioma
    localStorage.setItem(getDismissKey(detectedLanguage), 'true')
    setIsVisible(false)
  }
  
  if (!isVisible || currentLang === detectedLanguage) return null
  
  // Obtener información sobre los idiomas
  const currentLangInfo = SUPPORTED_LANGUAGES.find(lang => lang === currentLang)
  const detectedLangInfo = SUPPORTED_LANGUAGES.find(lang => lang === detectedLanguage)
  
  return (
    <div className="fixed top-20 left-4 z-50 bg-gradient-to-r from-yellow-50 to-amber-50 backdrop-blur-sm rounded-xl shadow-lg border border-yellow-200 p-4 animate-fade-in max-w-md">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <Globe className="w-5 h-5 text-yellow-600" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm text-gray-700 mb-2">
            <p className="font-medium text-gray-900 mb-1 font-body">
              {detectedLanguage === 'es' && '¿Prefieres ver la web en Español?'}
              {detectedLanguage === 'en' && 'Would you prefer to view in English?'}
              {detectedLanguage === 'ru' && 'Хотите посмотреть на русском?'}
            </p>
            <p className="text-xs text-gray-500">
              Detectamos que tu idioma preferido es {detectedLangInfo}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleAccept}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors duration-200 font-body"
            >
              <Check className="w-3 h-3 mr-1" />
              {detectedLanguage === 'es' && 'Sí, cambiar'}
              {detectedLanguage === 'en' && 'Yes, switch'}
              {detectedLanguage === 'ru' && 'Да, переключить'}
            </button>
            <button
              onClick={handleDismiss}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200 font-body"
            >
              <X className="w-3 h-3 mr-1" />
              {currentLang === 'es' && 'No, gracias'}
              {currentLang === 'en' && 'No, thanks'}
              {currentLang === 'ru' && 'Нет, спасибо'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}