'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguageOptimized'
import { Language } from '@/lib/translations'

const getSuggestedLanguage = (currentLang: Language, detectedLang: Language): Language | null => {
  if (detectedLang !== currentLang) {
    return detectedLang
  }
  return null
}

// MENSAJES ULTRA SIMPLIFICADOS - SOLO EL IDIOMA DESTINO
const getSimpleMessage = (suggestedLang: Language): string => {
  const messages = {
    es: '¿Ver en Español?',  // 3 palabras
    en: 'View in English?',  // 3 palabras  
    ru: 'На русском?'        // 2 palabras
  }
  return messages[suggestedLang] || 'Switch language?'
}

// BOTONES ULTRA SIMPLIFICADOS
const getSimpleButtons = (suggestedLang: Language) => {
  return {
    accept: suggestedLang === 'es' ? 'Sí' : suggestedLang === 'en' ? 'Yes' : 'Да',
    dismiss: suggestedLang === 'es' ? 'No' : suggestedLang === 'en' ? 'No' : 'Нет'
  }
}

export default function SimpleLanguageToast() {
  const [isVisible, setIsVisible] = useState(false)
  const { language: currentLang, changeLanguage, detectedLanguage } = useLanguage()
  
  // Verificar si ya se descartó esta sugerencia
  const getDismissKey = (lang: Language) => `simple-lang-dismissed-${lang}`
  
  useEffect(() => {
    if (currentLang === detectedLanguage) {
      setIsVisible(false)
      return
    }
    
    const dismissed = localStorage.getItem(getDismissKey(detectedLanguage))
    if (dismissed) {
      setIsVisible(false)
      return
    }
    
    // Mostrar con delay suave
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)
    
    // Auto-ocultar después de 5 segundos
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [currentLang, detectedLanguage])
  
  const handleAccept = () => {
    changeLanguage(detectedLanguage)
    setIsVisible(false)
  }
  
  const handleDismiss = () => {
    localStorage.setItem(getDismissKey(detectedLanguage), 'true')
    setIsVisible(false)
  }
  
  if (!isVisible) return null
  
  const suggestedLang = getSuggestedLanguage(currentLang, detectedLanguage)
  if (!suggestedLang) return null
  
  const message = getSimpleMessage(suggestedLang)
  const buttons = getSimpleButtons(suggestedLang)
  
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 px-4 py-2 animate-fade-in max-w-xs">
      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium text-gray-700 font-body">
          {message}
        </span>
        <div className="flex items-center space-x-1">
          <button
            onClick={handleAccept}
            className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full hover:bg-yellow-700 transition-colors duration-200 font-medium font-body"
          >
            {buttons.accept}
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200 px-1 py-1"
            title={buttons.dismiss}
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}